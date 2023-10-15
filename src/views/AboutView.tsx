import { defineComponent } from 'vue'
import styles from '../assets/app.module.css'

export default defineComponent({
  setup() {
    return () => (
      <div class={styles.about}>
        <h1>This is an about page</h1>
      </div>
    )
  },
})
