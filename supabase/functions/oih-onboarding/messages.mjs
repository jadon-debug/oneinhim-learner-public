export function decideMessage(step, profile, progress, now = Date.now()) {
  if (profile.email_suppressed) return null;
  if (step === 'welcome') return 'welcome';
  if (!profile.onboarding_emails) return null;
  if (step === 'day2') return progress?.first_started_at ? null : 'begin';
  if (progress?.last_active_at && now - Date.parse(progress.last_active_at) < 86400000) return null;
  if (step === 'day4') return progress?.first_completed_at ? 'next' : progress?.first_started_at ? 'resume' : null;
  return step === 'day7' ? 'help' : null;
}
const copy = {
  en: {
    welcome: ['Welcome to One In Him', 'Your free account is ready', 'You can now keep your completed lessons with your account and continue on another device. Take your time—there is no need to rush.', 'Continue your journey'],
    begin: ['Not sure where to begin?', 'One small step is enough', 'Start with Eternal Life, the first One Basics reading. It is a short introduction to knowing God through Jesus. You can explore other ways to learn inside the app.', 'Explore the first lesson'],
    resume: ['Pick up where you left off', 'Continue at your own pace', 'Your place is saved. You can return to your lesson whenever you have a quiet moment.', 'Resume your lesson'],
    next: ['Your next step with One In Him', 'Make room for what you have learned', 'You have completed a lesson. Take a moment to reflect on it, then choose your next step in the journey. Your progress is saved.', 'Choose your next step'],
    help: ['How can we help?', 'We would love to hear from you', 'Was it easy to find a place to begin? If you got stuck or have a question about the app, reply to this email. You can also return to the journey whenever you are ready.', 'Return to your journey'],
    greeting: 'Hello', close: 'The One In Him team', preferences: 'Manage email preferences', unsubscribe: 'Unsubscribe from starting tips', optional: 'You received this because you asked for help getting started. You can stop these emails at any time.', account: 'This email confirms your One In Him account. Optional starting tips can be managed in your account.'
  },
  nl: {
    welcome: ['Welkom bij One In Him', 'Je gratis account is klaar', 'Je kunt je voltooide lessen nu bij je account bewaren en op een ander apparaat verdergaan. Neem de tijd—je hoeft je niet te haasten.', 'Ga verder met je reis'],
    begin: ['Weet je niet waar je moet beginnen?', 'Eén kleine stap is genoeg', 'Begin met Eeuwig Leven, de eerste leesles van One Basics. Een korte kennismaking met het kennen van God door Jezus. In de app kun je ook andere manieren van leren ontdekken.', 'Ontdek de eerste les'],
    resume: ['Ga verder waar je gebleven bent', 'Leer in je eigen tempo', 'Je plek is bewaard. Je kunt terugkeren naar je les wanneer je een rustig moment hebt.', 'Ga verder met je les'],
    next: ['Je volgende stap met One In Him', 'Geef ruimte aan wat je hebt geleerd', 'Je hebt een les voltooid. Neem even de tijd om erover na te denken en kies daarna je volgende stap in de reis. Je voortgang is bewaard.', 'Kies je volgende stap'],
    help: ['Hoe kunnen we je helpen?', 'We horen graag van je', 'Kon je gemakkelijk een plek vinden om te beginnen? Loop je vast of heb je een vraag over de app? Beantwoord dan deze e-mail. Je kunt ook terugkeren naar de reis wanneer je er klaar voor bent.', 'Terug naar je reis'],
    greeting: 'Hallo', close: 'Het One In Him-team', preferences: 'E-mailvoorkeuren beheren', unsubscribe: 'Afmelden voor starttips', optional: 'Je ontvangt dit omdat je hebt gevraagd om hulp bij het beginnen. Je kunt deze e-mails altijd stopzetten.', account: 'Deze e-mail bevestigt je One In Him-account. Optionele starttips beheer je in je account.'
  }
};
export const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
export function renderMessage(kind, { language = 'en', firstName = '', actionUrl, preferencesUrl, unsubscribeUrl }) {
  const c = copy[language] || copy.en;
  const [subject, heading, body, button] = c[kind];
  const greeting = `${c.greeting}${firstName ? ' ' + firstName : ''},`;
  const footer = kind === 'welcome' ? c.account : c.optional;
  const textContent = `${greeting}\n\n${heading}\n\n${body}\n\n${button}: ${actionUrl}\n\n${c.close}\n\n${footer}\n${c.preferences}: ${preferencesUrl}${kind !== 'welcome' ? '\n' + c.unsubscribe + ': ' + unsubscribeUrl : ''}`;
  const htmlContent = `<!doctype html><html lang="${language === 'nl' ? 'nl' : 'en'}"><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta charset="utf-8"></head><body style="margin:0;background:#f5f3ee;color:#202720;font-family:Arial,sans-serif"><table role="presentation" style="width:100%;border-collapse:collapse"><tr><td style="padding:24px 16px"><table role="presentation" style="width:100%;max-width:560px;margin:auto;background:#fff;border-radius:16px"><tr><td style="padding:32px 24px;line-height:1.65"><p style="font-weight:bold;color:#a64710;letter-spacing:1px">ONE IN HIM</p><p>${escapeHtml(greeting)}</p><h1 style="font-size:28px;line-height:1.2">${escapeHtml(heading)}</h1><p>${escapeHtml(body)}</p><p style="margin:28px 0"><a href="${escapeHtml(actionUrl)}" style="display:inline-block;background:#a74408;color:white;padding:14px 20px;border-radius:8px;text-decoration:none;font-weight:bold">${escapeHtml(button)}</a></p><p>${escapeHtml(c.close)}</p><hr style="border:0;border-top:1px solid #ddd"><p style="font-size:13px;color:#596158">${escapeHtml(footer)}</p><p style="font-size:13px"><a href="${escapeHtml(preferencesUrl)}">${escapeHtml(c.preferences)}</a>${kind !== 'welcome' ? ` · <a href="${escapeHtml(unsubscribeUrl)}">${escapeHtml(c.unsubscribe)}</a>` : ''}</p></td></tr></table></td></tr></table></body></html>`;
  return { subject, textContent, htmlContent };
}
