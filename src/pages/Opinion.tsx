import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
} from "@ionic/react";
import '../pages/Tab1.css'

const Opinion: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding fade">
        <IonHeader>
            <IonTitle size="large" class="ion-title">OPINION</IonTitle>
        </IonHeader>
        <img
          src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/159683-tv-news-feature-ozark-season-4-release-date-how-to-watch-and-how-to-catch-up-image1-iwb2adxhjx.jpg"
          alt="Ozark Cover Page"
          className="fade"
          style={{ marginTop: 40, width: 1000 }}
        />       
        <div className="col-info">
          <p>
          Ozark is a very good show that uses the modern tools of TV making to great effect. Even if you've seen most of it before. Ozark is monotonous, ridiculous and unbelievable; it presents itself as a high-end drama with a top-rank cast, but it is incorrigibly middlebrow, chiefly awards-bait for its stars and crew.
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Opinion;
