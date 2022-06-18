import React from "react";

const useAuthModal = () => {
  let [visible, setVisibilty] = React.useState<boolean>(false);

  const setModalVisibilty = (visible: boolean): void => setVisibilty(visible);

  return { visible, setModalVisibilty };
};

export default useAuthModal;
