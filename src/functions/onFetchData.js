export default function onFetchData(setData) {
  fetch("https://restcountries.com/v3.1/all").then((result1) => {
    result1.json().then((result2) => {
      setData(result2);
    });
  });
}
