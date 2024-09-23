import "./Slider.scss";

export interface SliderProps {}

const Slider = ({}: SliderProps) => {
  return (
    <section className="container">
      <article className="slider">
        <span className="RightToLeft">
          <p>{`<A> Front les tous ! • Clash of Dev •`}</p>
          <p>{`<A> Front les tous ! • Clash of Dev`}</p>
        </span>
      </article>
    </section>
  );
};

export default Slider;
