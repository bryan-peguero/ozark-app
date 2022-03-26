import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonGrid,
  IonCol,
  IonRow,
  IonButton,
  useIonModal,
  IonLabel,
} from "@ionic/react";
import '../pages/Tab1.css'

const Body: React.FC<{
  onDismiss: () => void;
}> = ({ onDismiss }) => (
  <div>
    <IonLabel className="labels" onClick={() => onDismiss()}>
      Close
    </IonLabel>
    <div>
      <img
        src="https://media.gettyimages.com/photos/director-mark-williams-and-writer-bill-dubuque-attend-prescreening-picture-id605795664"
        alt="Mark Williams and Bill Dubuque"
        className="image"
      />
      <h4 className="h4">Mark Williams and Bill Dubuque</h4>
      <p><b>Mark Williams</b> is a producer and writer, known for <b>Honest Thief</b> (2020), <b>Ozark</b> (2017) and <b>The Marksman </b>(2021).<b> Bill Dubuque</b> is an American screenwriter known for such films as <b>The Accountant</b>, <b>The Judge</b>, and the television series <b>Ozark</b>.</p>
    </div>
  </div>
);

const Acerca: React.FC = () => {
  const handleDismiss = () => {
    dismiss();
  };

  const [present, dismiss] = useIonModal(Body, {
    onDismiss: handleDismiss,
  });
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding fade">
        <IonHeader>
            <IonTitle class="ion-title" size="large">
              ABOUT
            </IonTitle>
        </IonHeader>
        <img
          src="https://i.blogs.es/8c1b78/ozark/450_1000.jpg"
          alt="Ozark Cover Page"
          className="fade"
          style={{ marginTop: 40, width: 1000 }}
        />
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="col-1">
                <h2 className="h2">Seasons</h2>
                <p>4</p>
              </div>
            </IonCol>
            <IonCol>
              <div className="col-2">
                <h2 className="h2">Episodes</h2>
                <p className="p">37</p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div className="col-info">
          <p>
            The Byrdes and their teenage kids, Charlotte and Jonah, are, for all
            intents and purposes, an ordinary family with ordinary lives. Except
            for the job of Marty, a Chicago financial advisor who also serves as
            the top money launderer for the second largest drug cartel in
            Mexico. When things go awry, Marty must uproot his family from the
            skyscrapers of Chicago and relocate to the lazy lake region of the
            Missouri Ozarks.
          </p>
        </div>
        <div>
          <IonButton
            expand="block"
            style={{ marginTop: 20 }}
            onClick={() => {
              present({
                cssClass: "my-class",
              });
            }}
          >
            Creators
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Acerca;
