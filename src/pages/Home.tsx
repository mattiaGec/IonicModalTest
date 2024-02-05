import React from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    useIonActionSheet,
    useIonModal
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {

    const [presentLanguageSettingsModal, dismissLanguageSettingsModal] =
        useIonModal(LanguageSettingsModal, {
            onDismiss: () => dismissLanguageSettingsModal(),
        });

    const [present] = useIonActionSheet();
    const canDismiss =
        async () => {
            return new Promise<boolean>((resolve) => {
                present({
                    header: "title",
                    subHeader: "subtitle",
                    buttons:  [
                        {
                            text:
                                "close",
                            role: 'destructive',
                            cssClass: 'destructive',
                        },
                        {
                            text:
                                "continue",
                            role: 'cancel',
                            cssClass: 'cancel',
                        },
                    ],
                    cssClass: 'preventing-modal-dismiss',
                    onWillDismiss: (ev) => {
                        if (ev.detail.role === 'destructive') {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    },
                });
            });
        }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonButton onClick={() => presentLanguageSettingsModal({canDismiss})} >open</IonButton>
      </IonContent>
    </IonPage>
  );
};

const LanguageSettingsModal: React.FC<{onDismiss: () => void}> = ({onDismiss}) => {
    return (
        <IonButton onClick={() => onDismiss()}>close</IonButton>
    )
}

export default Home;
