import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateElement } from "vue";
@Component
export default class Backtop extends Vue {
  show = false;
  handleScroll() {
    const scrollTop = window.scrollY;
    const height = window.innerHeight;
    this.show = scrollTop > height;
  }
  render(h: CreateElement) {
    return h("mu-scale-transition", [
      h(
        "mu-button",
        {
          directives: [
            {
              name: "scroll",
              value: {
                target: this.$el,
                callback: this.handleScroll
              }
            },
            {
              name: "show",
              value: this.show
            }
          ],
          style: {
            position: "fixed",
            right: "16px",
            bottom: "16px",
            "z-index": 101
          },
          props: {
            fab: true,
            color: "red"
          },
          on: {
            click: () => window.scrollTo(0, 0)
          }
        },
        [
          h("mu-icon", {
            props: {
              value: "arrow_upward"
            }
          })
        ]
      )
    ]);
  }
}
