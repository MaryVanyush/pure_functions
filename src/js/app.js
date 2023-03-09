export default function checkHealth({ name, health }) {
  console.log(name);
  if (health < 15) {
    return 'critical';
  } if (health > 50) {
    return 'healthy';
  }
  return 'wounded';
}
