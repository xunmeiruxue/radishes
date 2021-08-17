import { defineComponent } from 'vue'
import {
  SecondaryBar,
  renderNavList
} from '@/components-business/secondary-bar/index'
import { navRouter } from '@/router/index'
import { RouterView } from 'vue-router'
import { MusicLayout } from '@/layout/music/music'
import './index.less'

export const Download = defineComponent({
  name: 'Download',
  setup() {
    const nav = renderNavList(navRouter, Download.name)
    return () => (
      <MusicLayout
        v-slots={{
          title: () => (
            <div>{$t('src__pages__download__view__index___17')}</div>
          ),
          head: () => <SecondaryBar nav={nav} size="small" />,
          body: () => <RouterView />
        }}
      />
    )
  }
})
