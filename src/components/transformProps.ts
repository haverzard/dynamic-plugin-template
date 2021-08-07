export default function transformProps(props: any) {
  const { height, width, formData, data } = props;
  return { height, width, ...formData, data };
}
