import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

// init Swiper:
import Home4 from "../Image/Home4.svg";
import Home3 from "../Image/Home3.svg";
import ShortHeading from "./shortHeadind";
import BigHeading from "./bigHeading";
import right from "../Image/right-arrow.svg";
import left from "../Image/left-arrow.svg";
export default function SliderC(props) {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={2}
      >
        <div className=" h-screen w-full flex pt-[10%] pb-[10%]">
          <div className="  w-1/6 flex items-center justify-center">
            <ButtonBack>
              <img src={left} className="h-7" />
            </ButtonBack>
          </div>
          <div className="w-4/6 ">
            <ShortHeading value="features" />
            <Slider>
              <Slide>
                <BigHeading
                  value="Create your own customized invoices"
                  class="flex justify-center"
                />
                <div className="flex h-full  pt-10">
                  <div className="">
                    <img src={Home3} alt="home3" />
                  </div>
                  <div className="w-1/2 h-full text-xl flex items-center ">
                    <p className="font-face-geb">
                      Create professional and elegant looking estimates and
                      invoices in any Arabic or English language with any
                      currency in a matter of seconds, and easily deliver them
                      to your clients.
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide>
                <BigHeading
                  value="Create your own customized invoices"
                  class="flex justify-center"
                />
                <div className="flex h-full  pt-10">
                  <div>
                    <img src={Home4} alt="home3" />
                  </div>
                  <div className="flex items-center w-1/2 h-full text-xl  ">
                    <p className="font-face-geb">
                      Receive instant online invoice payments from anywhere, any
                      customer and in any currency around the world — clients
                      can pay directly on your invoice using PayPal, Partial
                      Payment also available.
                    </p>
                  </div>
                </div>
              </Slide>
            </Slider>
          </div>
          <div className="w-1/6 flex items-center justify-center">
            <ButtonNext>
              <img src={right} className="h-7" />
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </>
  );
}
