const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((active) => !active);
  }

  return <button onClick={handleClick}>Abrir</button>;
};

export default ButtonModal;
