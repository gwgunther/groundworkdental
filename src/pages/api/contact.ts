import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { createAdminClient } from '../../lib/supabase-server';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, website, comment } = data;

    // Validate required fields
    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 1. Store in Supabase
    const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
    const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_KEY;

    if (supabaseUrl && serviceRoleKey) {
      const supabase = createAdminClient();
      const { error: dbError } = await supabase.from('leads').insert({
        contact_name: name,
        contact_email: email,
        website_url: website || null,
        comment: comment || null,
        submitted_at: new Date().toISOString(),
        status: 'new',
      });

      if (dbError) {
        console.error('Supabase insert error:', dbError);
        // Don't fail the whole request — still try to send email
      }
    } else {
      console.log('Supabase not configured — skipping database insert');
    }

    // 2. Send email notification via Resend
    const resendKey = import.meta.env.RESEND_API_KEY;

    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: 'Groundwork Dental <notifications@groundworkdental.com>',
        to: 'hello@groundworkdental.com',
        replyTo: email,
        subject: `New Lead: ${name}${website ? ` — ${website}` : ''}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Website: ${website || 'No current website'}`,
          '',
          `Comment:`,
          comment || '(none)',
          '',
          `Submitted: ${new Date().toISOString()}`,
        ].join('\n'),
      });
    } else {
      console.log('Resend not configured — skipping email notification');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
