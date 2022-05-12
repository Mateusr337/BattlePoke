export default function handleChange(e: any, object: object, setObject: Function) {
  setObject({ ...object, [e.target.name]: e.target.value });
}
