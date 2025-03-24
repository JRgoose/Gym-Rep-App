let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

function save() {
  let setRecord = count + " reps"
  
  saveEl.innerHTML += setRecord + "<br>"

  count = 0
  countEl.textContent = 0
}
