# Nice messages

Display Backdrop status, warning, and error messages as lightweight popups using the jQuery jGrowl plugin. This avoids page layout shifts caused by native message markup and provides a consistent, themeable notification experience.

![Nice Messages](https://raw.githubusercontent.com/backdrop-contrib/nicemessages/1.x.1.x/screenshot.png)

## Features

- Popup rendering for `status`, `warning`, and `error` messages via jGrowl
- Global, per-page, or per-user visibility controls
- Per-type lifetime, glue, and speed settings
- No duplicate native message markup when popups are enabled
- Ships with bundled jGrowl assets under `lib/jgrowl`

## Requirements

- Backdrop CMS 1.x
- jQuery (bundled in Backdrop core)

## Installation

- Install this module using the official Backdrop CMS instructions:
  https://backdropcms.org/guide/modules

- The module bundles the jGrowl library at `lib/jgrowl` and loads it via Backdrop’s library system; no extra download is required.

## Configuration

- Go to Administration > Configuration > System > Nice messages
  (`admin/config/system/nicemessages`).
- Choose the default state: On, Off, or User-controlled (requires permission).
- Adjust position and per-type settings (lifetime, glue, speed).
- Configure page visibility rules using path patterns (`*` wildcard supported). Examples: `blog`, `blog/*`, `<front>`.

## Permissions

- `administer nicemessages`: Access the configuration form.
- `toggle nicemessages`: Users with this permission can enable/disable popups on their account edit page (`user/$uid/edit`).

## Behavior and Notes

- Libraries: jGrowl assets are declared with `hook_library()` and attached on non-AJAX requests; AJAX responses rely on the base page assets.
- The module overrides the `status_messages` theme function and suppresses native markup to prevent duplicates when popups are active.
- If messages do not appear on dynamic/AJAX-heavy pages, ensure at least one non-AJAX page load has occurred since cache clear so assets are present.

## Troubleshooting

- No popups appear:
  - Clear caches, then load a regular (non-AJAX) page.
  - Check browser console for errors involving `jGrowl` or `BackDrop.behaviors`.
  - Verify `lib/jgrowl/jquery.jgrowl.min.js` and `.css` are present.
- Native messages still render:
  - Clear caches; check that no theme overrides are forcing native `status_messages` output.
- User toggle not working:
  - Ensure the field `field_user_nicemessages_enabled` exists on the User entity (created on module install) and users have the `toggle nicemessages` permission.

## Issues

Bug reports and feature requests:
https://github.com/backdrop-contrib/nicemessages/issues

## Maintainers

- [Alan Mels](https://github.com/alanmels)
- Seeking additional maintainers

## Credits

- Ported to Backdrop CMS by [Alan Mels](https://github.com/alanmels)
- Originally written for Drupal by [Blazej Owczarczyk (blazey)](https://www.drupal.org/u/blazey)
- Sponsored by [AltaGrade](https://www.altagrade.com)

## License

This project is GPL v2 software. See `LICENSE.txt` for the complete text.
