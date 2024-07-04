export default function sortAndUniq(array) {
    let uniq = [... new Set(array)];
    let sortArray = uniq.sort(function(a, b){return a - b});
    return sortArray;
}