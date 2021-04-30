/* @flow */

import React from 'react';

import { Dialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import AbstractUnMuteVideoRemoteParticipantsDialog
    from '../AbstractUnMuteVideoRemoteParticipantsDialog';

/**
 * A React Component with the contents for a dialog that asks for confirmation
 * from the user before disabling a remote participants camera.
 *
 * @extends Component
 */
class UnMuteVideoRemoteParticipantsDialog extends AbstractUnMuteVideoRemoteParticipantsDialog {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                okKey = 'dialog.unmuteParticipantsVideoButton'
                onSubmit = { this._onSubmit }
                titleKey = 'dialog.unmuteParticipantsVideoTitle'
                width = 'small'>
                <div>
                    { this.props.t('dialog.unmuteParticipantsVideoBody') }
                </div>
            </Dialog>
        );
    }

    _onSubmit: () => boolean;
}

export default translate(connect()(UnMuteVideoRemoteParticipantsDialog));
