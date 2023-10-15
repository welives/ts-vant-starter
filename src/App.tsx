import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { defineComponent } from 'vue'
import styles from './assets/app.module.css'
import Logo from './assets/logo.svg'

export default defineComponent({
  setup() {
    return () => (
      <>
        <header>
          <img alt="Vue logo" class={styles.logo} src={Logo} width="125" height="125" />

          <div class={styles.wrapper}>
            <HelloWorld msg="You did it!" />
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
            </nav>
          </div>
        </header>

        <RouterView />
      </>
    )
  },
})
