export const GetData = async () => {
    let response = await fetch('https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/508f46dbf6535f830aa92cf97359853c5700bab1/mock-progress');

    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
}