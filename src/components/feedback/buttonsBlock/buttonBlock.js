import buttonBlockStyles from "./buttonBlockStyles";

const { Div, Button } = buttonBlockStyles;

const ButtonBlock = ({ options, onLeaveFeedback }) => {
  return (
    <Div>
      {options.map((name) => {
        return (
          <Button
            key={name}
            type="button"
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </Button>
        );
      })}
    </Div>
  );
};

export default ButtonBlock;
