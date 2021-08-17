/**
 * Created by buddy on 2021/2/18.
 */
import { defineComponent } from 'vue'
import { Button, Image, Tag } from 'vant'
import Icon from '@/components-global/icon/main'
import './index.less'
import { useRouter } from '@/hooks'

export const FollowCard = defineComponent({
  name: 'FollowCard',
  // eslint-disable-next-line vue/require-prop-types
  props: ['info'],
  setup() {
    const $router = useRouter()
    return function(this: any) {
      const { info } = this

      const avatarIcon = info?.avatarDetail?.identityIconUrl

      return (
        <div
          class="follow-card"
          onClick={() => {
            $router.push(`/userinfo/${info.userId}`)
          }}
        >
          <div class="follow-card__avatar">
            <Image
              width="90"
              height="90"
              round
              fit="cover"
              src={info.avatarUrl}
            ></Image>
            {avatarIcon && (
              <Image
                width="22"
                height="22"
                src={avatarIcon}
                class="follow-card__avataricon"
              ></Image>
            )}
          </div>
          <div class="follow-card__info">
            <div class="follow-card__title">
              <div class="follow-card__name">{info.nickname}</div>
              {info.vipType > 0 && (
                <Tag color="#131313" text-color="#ffe3df">
                  {$t(
                    'src__pages__userinfo__views__follow-view__card__49_58_51_16'
                  )}
                </Tag>
              )}
            </div>
            <div class="follow-card__desc">{info.signature}</div>
            <div>
              {$t(
                'src__pages__userinfo__views__follow-view__card___55',
                info.playlistCount
              )}
              {$t(
                'src__pages__userinfo__views__follow-view__card___56',
                info.followeds
              )}
            </div>
          </div>
          <Button disabled round class="follow-card__btn">
            <div class="follow-card__btnc">
              <Icon icon="email" color="#333" size={16}></Icon>
              {$t('src__pages__userinfo__views__follow-view__card___61')}
            </div>
          </Button>
        </div>
      )
    }
  }
})
