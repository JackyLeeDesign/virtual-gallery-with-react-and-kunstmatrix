const getClientHeight = (subHei = 0, Widyn = false) => {
  let result = {
    cliWid: 0,
    cliHei: 0
  };
  result.cliHei = window.screen.availHeight - subHei;
  if (Widyn) {
    result.cliWid = window.screen.availWidth;
  }
  return result;
};
export default getClientHeight;
