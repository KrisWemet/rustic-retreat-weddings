# Tour inquiry funnel

The website sends these GA4 events when Google Analytics is available:

| Event | Meaning |
| --- | --- |
| `inquiry_click` | Visitor clicks a link to `/contact` or `/contact?intent=question` |
| `inquiry_form_start` | Visitor focuses a field on the inquiry form |
| `inquiry_submit` | Formspree accepts the submission |

Each event includes `inquiry_type` (`tour` or `question`). Clicks also include `source_page`.

Formspree submissions include `inquiryType` and `landingSource`. The latter records `utm_source / utm_medium / utm_campaign` when present, otherwise the referring site or `Direct / unknown`. Tag Facebook links and ads with UTM values so their sources remain identifiable.

Tour scheduled, tour attended, and venue booked happen after form submission. Record those three dates against each inquiry in the lead tracker you use, along with the source and wedding date. The website cannot infer those outcomes on its own. Review counts by source monthly: clicks, starts, submissions, scheduled tours, attended tours, and booked weddings.
