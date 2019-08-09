declare module 'react-tilt' {
  type TiltProps = {
    options?: {
      axis?: 'X' | 'Y' | null;
      easing?: string;
      max?: number;
      perspective?: number;
      reset?: boolean;
      reverse?: boolean;
      scale?: number;
      speed?: number;
      transition?: boolean;
    };
  };

  const Tilt: React.FC<TiltProps & React.HTMLProps<HTMLDivElement>>;
  export default Tilt;
}
