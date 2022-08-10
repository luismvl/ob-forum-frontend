export default function checkIfEmail(identity) {
  return /^[^@]+@[^@]+\.[^@]+$/.test(identity)
}
