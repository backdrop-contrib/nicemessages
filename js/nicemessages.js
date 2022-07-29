/**
 * @file
 * nicemessages.js
 *
 * Use jGrowl to display messages.
 */

/**
 *  Displays messages with jGrowl.
 */
Backdrop.behaviors.nicemessages = {
    attach: function () {
        if (Backdrop.settings.nicemessages) {
            jQuery.jGrowl.defaults.position = Backdrop.settings.nicemessages.position;
            jQuery.jGrowl.defaults.closerTemplate = '<div>'+Backdrop.t('[ close all ]')+'</div>';
            if (Backdrop.settings.nicemessages.items) {
                for (i in Backdrop.settings.nicemessages.items) {
                    jQuery.jGrowl(
                        Backdrop.settings.nicemessages.items[i].content, {
                            life: Backdrop.settings.nicemessages.items[i].life,
                            glue: Backdrop.settings.nicemessages.items[i].glue,
                            speed: Backdrop.settings.nicemessages.items[i].speed,
                            theme: Backdrop.settings.nicemessages.items[i].type,
                            sticky: Backdrop.settings.nicemessages.items[i].life == 0
                        }
                    );
                }
                delete Backdrop.settings.nicemessages.items;
            }
        }
    }
}
