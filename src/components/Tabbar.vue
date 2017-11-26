<template>
    <section class="tabbar">
        <router-link :to="{ name: 'index' }" class="tab-item" exact>
            <div class="tab-item-icon">
              <i class="icon iconfont icon-zan"></i>
            </div>
            <p class="tab-item-label">精选</p>
        </router-link>
        <router-link :to="{ name: 'search' }" class="tab-item" exact>
            <div class="tab-item-icon">
              <i class="icon iconfont icon-gouwuche"></i>
            </div>
            <p class="tab-item-label">购物车</p>
        </router-link>
        <router-link :to="{ name: 'goodsdetail' }" class="tab-item" exact>
            <div class="tab-item-icon">
                <i class="icon iconfont icon-wodejuhuasuan"></i>
            </div>
            <p class="tab-item-label">我</p>
        </router-link>
    </section>
</template>

<script>
export default {
    name: 'tabbar',
    data() {
        return {};
    }
}
</script>

<style scoped lang="less">
.tabbar {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    height: 50px;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, .1);
    box-sizing: border-box;
    .tab-item {
        display: block;
        flex: 1;
        padding: 5px 0;
        &.router-link-exact-active {
            color: #ed424b;
        }
    }
    .tab-item-icon {
        width: 30px;
        height: 30px;
        margin: 0 auto;
        .icon {
            width: 30px;
            height: 30px;
          font: 20px/30px 'Avenir';
          text-align: center;
          padding-left: 5px;
        }
    }
    .tab-item-label {
        text-align: center;
        font-size: 12px;
    }
}
</style>
