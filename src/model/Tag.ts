export default class Tag {
  category!: string;
  icon!: string;
  title!: string;
  url!: string;
  label!: string;
  constructor(...props: any[]) {
    this.category = props[0];
    this.icon = props[1];
    this.title = props[2];
    this.url = props[3];
    this.label = props[4];
  }
}
