import {
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
} from "@ionic/react";
import "../pages/Tab1.css";


const Personas: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen class="ion-padding fade" scroll-y="false">
        <IonHeader>
            <IonTitle size="large" class="ion-title">CHARACTERS</IonTitle>            
        </IonHeader>
        <IonSlides pager={true}>
          <IonSlide>
            <div className="contenedor" id="marty-byrde">
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ozark-402-unit-02970r-1642784988.jpg?crop=0.607xw:0.607xh;0.347xw,0.107xh&resize=480:*"
                alt="Marty Byrde"
              />
            </div>
            <h1>Marty Byrde</h1>
            <IonModal
              trigger="marty-byrde"
              breakpoints={[0.1, 0.5, 1]}
              initialBreakpoint={0.5}
              swipeToClose={true}
            >
              <IonContent>
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ozark-402-unit-02970r-1642784988.jpg?crop=0.607xw:0.607xh;0.347xw,0.107xh&resize=480:*"
                alt="Marty Byrde"
              />
              <h2 className="bolder">Martin "Marty" Byrde</h2>
              <p>
              Martin "Marty" Byrde is a main character in the Netflix series, <b>Ozark</b>. He is the husband of Wendy Byrde, father of both Charlotte and Jonah Byrde, and a financial advisor turned money launderer..
              </p><br/>
              <p>
              Marty moves from Chicago to Missouri Ozarks in order to launder money for the drug cartel that would have otherwise had him dead. He considers Missouri to be a safer and less competitive place. So he purchases a strip club to help him achieve this goal. Unfortunately, his presence gets him in trouble with the family that runs crime in the area - the Langmores. 
              </p>
              </IonContent>
            </IonModal>
          </IonSlide>
          <IonSlide>
            <div className="contenedor" id="wendy-byrde">
              <img
                src="https://i0.wp.com/lamazmorradelfriki.com/wp-content/uploads/2022/01/Ozark-Laura-Linney.jpg?fit=1400%2C700&ssl=1"
                alt="Wendy Byrde"
              />
            </div>
            <h1>Wendy Byrde</h1>
            <IonModal
              trigger="wendy-byrde"
              breakpoints={[0.1, 0.5, 1]}
              initialBreakpoint={0.5}
              swipeToClose={true}
            >
              <IonContent>
              <img
                src="https://i0.wp.com/lamazmorradelfriki.com/wp-content/uploads/2022/01/Ozark-Laura-Linney.jpg?fit=1400%2C700&ssl=1"
                alt="Wendy Byrde"
              />
              <h2 className="bolder">Wendy Byrde</h2>
              <p>
              Wendy and Marty Byrde have been married for close to 20 years. Together they have 2 kids, <b>Charlotte</b> and <b>Jonah</b>.
              </p><br/>
              <p>
              Wendy was raised in Boone, North Carolina, and used to have a very strong accent. She grew up in a poor, church-going family. In her teenage years, she got heavily involved in drugs and alcohol, and even had abortions. She confessed this to her pastor and was rejected by him, causing her to question her faith and split from the church.
              </p>
              </IonContent>
            </IonModal>
          </IonSlide>
          <IonSlide>
            <div className="contenedor" id="ruth-langmore">
              <img
                src="https://www.looper.com/img/gallery/why-ozark-fans-are-confused-about-ruths-living-situation/l-intro-1602629814.jpg"
                alt="Ruth Langmore"
              />
            </div>
            <h1>Ruth Langmore</h1>
            <IonModal
              trigger="ruth-langmore"
              breakpoints={[0.1, 0.5, 1]}
              initialBreakpoint={0.5}
              swipeToClose={true}
            >
              <IonContent>
              <img
                src="https://www.looper.com/img/gallery/why-ozark-fans-are-confused-about-ruths-living-situation/l-intro-1602629814.jpg"
                alt="Ruth Langmore"
              />
              <h2 className="bolder">Ruth Langmore</h2>
              <p>
              Ruth grew up in the Ozarks. She is a strong, smart young woman with ambitions above her lower station in life. She was born poor and her father has been in jail since the beginning of the story. She lives in a trailer in the outskirts of town. Her taste in music is classic to mid 90's rap and hip-hop which she is often seen listening to on her iPod.
              </p><br/>
              <p>
              Her intelligence, awareness and common sense are strong assets to her. She is able to manage the <b>Lickety Splitz</b> club to bigger profits and better clientele when given the opportunity. She notices that the "breeding pair" of wildcats purchased by her uncles are actually both female. She is capable of committing murder and laying lethal traps.
              </p>
              </IonContent>
            </IonModal>
          </IonSlide>
          <IonSlide>
            <div className="contenedor" id="darlene">
              <img
                src="https://static3.srcdn.com/wordpress/wp-content/uploads/2022/02/Darlene-Snell-in-Ozark.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
                alt="Darlene Snell"
              />
            </div>
            <h1>Darlene Snell</h1>
            <IonModal
              trigger="darlene"
              breakpoints={[0.1, 0.5, 1]}
              initialBreakpoint={0.5}
              swipeToClose={true}
            >
              <IonContent>
              <img
                src="https://static3.srcdn.com/wordpress/wp-content/uploads/2022/02/Darlene-Snell-in-Ozark.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
                alt="Darlene Snell"
              />
              <h2 className="bolder">Darlene Snell</h2>
              <p>
              Darlene Snell is a powerful matriarch in the Ozark series. Although she quotes Bible verses, she enacts violent deeds often.
              </p><br/>
              <p>
              Darlene is married to Jacob Snell. As young adults, she made sure that Jacob would fall in love with her over any other woman. Eventually, she outwitted and killed Jacob.
              </p>
              </IonContent>
            </IonModal>
          </IonSlide>
          <IonSlide>
            <div className="contenedor" id="omar-navarro">
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/3/2020/03/Felix-Solis-plays-Omar-Navarro-in-Netflix-dbe5f45.jpg?quality=90&resize=620,413"
                alt="Omar Navarro"
              />
            </div>
            <h1>Omar Navarro</h1>
            <IonModal
              trigger="omar-navarro"
              breakpoints={[0.1, 0.5, 1]}
              initialBreakpoint={0.5}
              swipeToClose={true}
            >
              <IonContent>
              <img
                src="https://images.immediate.co.uk/production/volatile/sites/3/2020/03/Felix-Solis-plays-Omar-Navarro-in-Netflix-dbe5f45.jpg?quality=90&resize=620,413"
                alt="Omar Navarro"
              />
              <h2 className="bolder">Omar Navarro</h2>
              <p>
              He is <b>Helen Pierce's</b> boss and the rest of the cartel members. He is also technically Marty's boss. He asks Marty and Wendy to help him launder his money through their casino.
              </p><br/>
              <p>
              Omar is very short, very calculating, and heartless. He doesn't seem to care much for the people around him as long as they do his bidding. Wendy and Marty continuously try to seek his approval.
              </p>
              </IonContent>
            </IonModal>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Personas;
