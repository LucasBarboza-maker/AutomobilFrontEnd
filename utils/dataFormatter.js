import moment from "moment";


export function transformMomentInDate(value){
  return moment(value).format("MM/DD/YYYY")
}

export function formatDateToUSAStyle(value){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const d = new Date(value);

  return d.toLocaleDateString("en-US", options)
}
