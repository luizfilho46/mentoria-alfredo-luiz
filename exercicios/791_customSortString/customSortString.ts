const order = 'kqep';
const st = 'pekeqaf';

customSortString(order, st);
function customSortString(order: string, s: string): string {
  let response = '';
  const arr: string[] = s.split('');
  for (let i = 0; i < order.length; i++) {
    arr.forEach((item, k) => {
      if (item === order[i]) {
        response += order[i];
        arr.splice(k, 1,"");
      }
    });
  }

  response=response.concat(arr.join(""))
  console.log(response)
  return response;
}
