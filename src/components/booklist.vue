<template>
<div class="boot">
<ul class="bookwrap" ref="wrapper">
	<li class="goodstype">
		<!-- <h1 class="title">自营商品</h1> -->
		<ul>
			<li class="book-item">
				<div class="top">
					<div class="avator"><img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3902168736,1556323406&fm=58"></div>
					<div class="info"><span><img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3902168736,1556323406&fm=58">沈若愚</span></div>
					<div class="adress">郑州轻工业大学</div>
				</div>
				<div class="middle">
					<div class="icon"><img src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3902168736,1556323406&fm=58"></div>
					<div class="content">
						<h2 class="name">致我们终将逝去的青春</h2>
						<div class="desc">辛夷坞 &nbsp;|&nbsp; 百花洲文艺出版社</div>
						<div class="price">
						  <span class="now">￥10</span>
						  <span class="old">￥30</span>
						</div>
						<div class="extra">
							<span>今天</span>
							<span>0</span>
							<span>全新</span>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</li>
</ul>
	
</div>
  

</template>

<script>
export default {

  name: 'booklist',

  data () {
    return {

    };
  },
  methods(){
  
  }
};
</script>

<style lang="less" scoped>
.boot{
	width: 100%;
	height: 100%;
	margin-top: .5rem;
	.bookwrap{
		width: 100%;
	    height: 100%;
	    overflow: hidden;
	    .title{
	    	height: 2.5rem;
	    	padding-left:.5rem;
	    	border-left: 4px solid #52D3AA; 
	    	line-height: 2.5rem;
	    	font-size: 1.15rem;
	    	color: #696969;
	    }
	    .book-item{
	    	width: 100%;
	    	border-top: 1px solid rgba(169, 169, 169, 0.5);
	    	overflow: hidden;
	    	.top{
	    		height: 3rem;
	    		width: 100%;
	    		position: relative;
	    		color: #696969;
	    		.avator{
	    			margin-top: .25rem;
	    			padding-left: 1rem;
	    			width: 2.5rem;
	    			height: 2.5rem;
	    			img{
	    				width: 100%;
	    				height: 100%;
	    				border-radius: 50%;
	    			}
	    		}
	    		.info{
	    			position: absolute;
	    			top:0;
	    			left:4rem;
	    			line-height: 3rem;
	    			span{
	    				display: block;
	    				height: 2rem;
	    				width: 6rem;
	    				text-align: center;
	    				color: #696969;
	    				font-size: .8rem;
	    				img{
	    					margin: 0 auto;
	    					width: 1rem;
	    					height: 1rem;
	    					padding: 0 .25rem 0 0;
	    					vertical-align: middle;
	    				}
	    			}
	    		}
	    		.adress{
	    			position: absolute;
	    			top: 0;
	    			right: .5rem;
	    			text-align: center;
	    			line-height: 3rem;
	    			margin-bottom: -.1rem;
	    			font-size: .9rem;
	    			color: #808080;
	    		}
	    	}
	    	.middle{
	    		display: flex;
	    		margin: 18px;
	    		.icon{
	    			flex: 0 0 4rem;
	    			margin-right: 10px;
	    			height: 5.4rem;
	    			img{
	    				width: 100%;
	    				height:100%;
	    			}
	    		}
	    		.content{
	    			flex: 1;
	    			.name{
	    				margin: 2px 0 10px 0;
	    				height: .875rem;
	    				line-height: .875rem;
	    				font-size: .875rem;
	    				color: rgb(7,17,27);
	    			}
	    			.desc{
	    				margin-bottom: 8px;
	    				line-height: 0.625rem;
	    				font-size: 0.625rem;
	    				color: rgb(147,153,159);
	    			}
	    			.price{
	    				font-weight: 700;
	    				line-height: 1.5rem;
	    				margin-top: .825rem;
	    				.now{
	    					margin-right: .5rem;
	    					font-size:1.2rem;
	    					color: #52D3AA; 
	    				}
	    				.old{
	    					text-decoration: line-through;
	    					font-size: .625rem;
	    					color: rgb(147,153,159);

	    				}
	    			}
	    			.extra{
	    				display: flex;
	    				margin-left: .625rem;
	    				margin-top: .625rem;
	    				font-size: .625rem;
	    				line-height: .625rem;
	    				color: rgb(147,153,159);
	    				span{
	    					display: inline-block;
	    					flex: 1;
	    				}
	    			}
	    		}

	    	}
	    }
	}

}
</style>