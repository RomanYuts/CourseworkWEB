/* eslint-disable no-mixed-spaces-and-tabs */
<template>
<div id ="sidebar">
    <nav id ="sidebar-nav">
        <ul>
            <li>
                 <router-link to = "/" id="starter-page-button" class="menu-button">
                    <span class="menu-item">
                        <svg width="22" height="18">
                            <image id="Ellipse_1" data-name="Ellipse 1" width="22" height="14" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAOCAYAAAArMezNAAAB2klEQVQ4jXXT24tNYRjH8c9sx2liXCjKBYUSV85u5JhkRU4rYolCSqQpueUPUBIl5GZmF2bnQmxShEZKceOCUly5IYrBMA7Ro3dqtdrzq7X27jl8e9fz/N62nt6bhtFkrMAqzMNM1PAGz3AP94s8e9uquRW4HTvRhdkpNog6vmE3OlP8NU6hu8izL2VIrcUpu3GxBA1dxj4cwelSfDrOolFvNKcNB56UAFvRh8+Vr6iV/g9pAHexDL31RnNqFdyGk1iOA8jS72DKb0EPLuBwiv3FcWzCWizEmXqjOaYM3oYCP3AHX9JJBlJ+JHZgP8aW5v64yLOvRZ49RCxxfdrB/+V1JtjidIpLuIKNONhiD2Vdx3ksxVGMwgusDPA6NCsNsf2OFqB+PMV4LEixXwlY1vZa8mpVVegtbMAi5HhUylWhodUBnp9G0JfG0F8paiZft6e671hSqRny+W38wdwAz8HztPnw6olK0w1MwVUcwgzMqtScK/JsFzbjQdQEeFxywYdU9K7SFLN8iT3pcsTmJ1Rq3seryLNwVXxxR9gogOGIuHGvsLfSFDb8lPIx52MtZtpVbzRjVBOxBh/DFdfCHhidin4nPw9pRMoFPNwQc/5ZAUc+nrhog3jyD1x2eLu6GGxBAAAAAElFTkSuQmCC"/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Dashboard</span>
                    <Rarrow/>
                 </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="24" height="28">
                            <image id="charts-mind-map-icon" width="24" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACUUlEQVRIiaWWW4hOURTHfzPIi6ZcH5UOjQ7xckI8klsk5NKMhhSeJPLAiyLiXSmGZpgQxmXcGaHwoi0Uu6iNEZkyNRoPZBq0tD7OnPbZe8q/voez1jrrv/9rr7PWV9Vy9uoQoBFYBHQDe4AWwqjRd+YAncBOZ81lX2A10AysBUYC44ETwMwIwTlgJTACSIG2JM0mlRHUeezrA8nHAHM99nVlBD0e+8MAwbcS+5sygo0ee1eA4Kue9kfO9gQ45gseDJwBPgCL9RSfgSvACqC1hOQ4sAu4CzwDDjlrfpURCB7pr4I6vcgyElHdC2xw1gTE/iMo4rSWoFXb9xqwCpgF9AH1wJZg5giB4DywUORrOaYV/HIP94FPIYLqyAFuAN89ydFWfZCk2aD/IVgNTAz4E2BNKEGoRIJ5Eb9g8l+2NBNVu4HhQLuzZnOMoGoABJuSNJMyvgOO5uy1SZrVxEok3eTt7xxuAhOAIx5fQ0zB04iK984aGXpSHhkvBwv+vpCCZcBbYB9wz+OX8TA993wS+FiI2VpRMFovtEsl7wd26BfbqDENwAz9godqB3VWMjlrupM0mwJs09F/21lzURaOvHRLl4jglZZlOfAioFCG3nZnzeFAzJ82PZVLLqjV/g8lFyzRRTNKSuOsafYFyR2M89hnR5ILxgLDgL1AU5Jm18sIfMvFG5yDbLWmgm1BkmZLfQRSjsf6/BM4AFyKEMgu9kEuvh/kDqS1pN2mAl+AjkhywWvgJVBc9Bd8Cip4PsDkAlEqc+eO/tURsvnOmv57GfgNPueOZF9BrQsAAAAASUVORK5CYII="/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Charts</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="22" height="20">
                            <image id="Rounded_Rectangle_8_copy_2" data-name="Rounded Rectangle 8 copy 2" width="22" height="16" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAAAg0lEQVQ4jWNcvGpLPQMDQwUDAwMHA3XADwYGhk4mBgaGcioaygA1qxhkcBfUFmoBkFm9oKCgyJS7185gFWeiyFQ8gKYGNzAwMHxnYGD4Tw5W1jL5rqxl0oDN4DIKUwU4FWAzmNJUAU4F6IKjqYL2BrMwMDBQVAgpa5mgCw3FQoiBoRcAuzouhmimn70AAAAASUVORK5CYII="/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Tasks</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="22" height="22" viewBox="0 0 22 18">
                            <image id="comment" width="22" height="18" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAYAAABfJS4tAAAA2UlEQVQ4jdXUrwrCUBTH8e/mtFqsWn0JQbDOujZEMNtM+goiZsFkM4pGTYKvIRbNIohF5cgRRLa5jd3gr2zcHT73z9lmzeZLgBbQA8qADdxJFkuvJ2Die+5I4AawTgj9SltWN84YlQwFrhqAiwLfDMDXNI2Kk4dtAH3lP2ErRl0quGAAzgt8MQA7Ak8NwAuB+8AqQ3QHdBz9QJpADajow5L+Q96NPQADrY1q9tH33I3cOB+D26+iEZBTrA7sgyTfcwNnCHuPZeWCSmQngWhUwmAZPwNdPbNkAZ4QvyOIVvsFDAAAAABJRU5ErkJggg=="/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Comment</span>
                    <span id="comment-count">9</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="22" height="27">
                            <image id="Gear_icon" width="22" height="22" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAB7ElEQVQ4jZ2VPWgWQRCGn6iNSPAHEQuJ6BqFtUpcUYiIgqCNWBnIj6hoFySgjSAIJoIGtBGxVgIp1ELQIlVEiATkNE080lxhYaONQdFCJDIwG9Zxv/tOX1iYnd333b2Z2bmOyccvaIDLwHVgGbgL3IwLVVlkCauaqAIngPXABuBYE4IV3gXcB7Yav0vsbX8s+LDP+TDpfNjTSvgg8BoYAd4Dx4HTwCyw0xwivgHgIiCxGAbmnA+H4qY1CeEIsEXtTcB0zZf26UixUX2z9sa3gZc1Yu3wvCqLiTixMZZP//Ufoj+B/tRhhQ/XVMpHHTlISE/WCUt9dhif1O4QsF1Hv94whXDuOB96nQ+d8aQbwH7N9u7MbSTzU8n8ifKmzL4u4C3wxfkwIy9vucXnCb4D61qsfQY2tyK2e3k2LClW1xFF+BzwAHiVWV8LXM34R7VuLe4BF4ADtgktAHszBGlAjzSRg1rzFmVVFitcG4pxJVuMAR905ETjnhVY4ek2D6Qu5t11wk9N//gXjDsfTuWEx5r22gRfzfxWTngG+Kb2InAUOA+8ywiWwBVgB3Ap8Z+Jhq2KHm1E10wSHwJn1ZYcyLP9IRP5NTkf5A+zVJXFXCTYeM7rsHiTCH+KohFVWfzVu5smSg5bUvtZ293Ab8SkaKdUOjOmAAAAAElFTkSuQmCC"/>
                        </svg>
                    </span>
                        <span class="menu-item-name">Setting</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="23" height="26">
                            <path class="cls-1" d="M45.5,293.005l3.792,6.914L57,301.408l-5.369,5.763,0.974,7.834-7.11-3.353-7.11,3.353,0.975-7.834L34,301.408l7.712-1.489,3.792-6.914" transform="translate(-34 -293)"/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Feedback</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="23" height="24">
                            <image id="Chain_link_icon" width="23" height="20" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAUCAYAAABmvqYOAAACI0lEQVQ4jaXUS4jOURjH8c9gGBJRFiKZ3qReMoa3pFxyWygWLlGslSxsLZAs2CD3QrIZKxYuoVxGomz8yUL/ov5uEVMWQxrFDDrTeev0zwwzns3/nPM+53ue93l+z9PQduGa/7AhaMJQdBd59q3842BtAy7jIa6jrVKtLU4dhg0S/BSz0FA6X1Kp1g4VebbfICIfg19oieDvuIr7+Izx2FOp1hYMJvLzyfoN5uETRmAu7mA4DlaqtaUDjfw0XuEspqKjyLOeIs+6ijx7gDPRb1L4h3+LvBkbMQ1BCY8xB519+H+I38mY0B/8BLZGmYm5/onVOIn2P9zZlD7UF7wLI+M6ADvQGAu6BhPxGkX9QqVau4gZcdte5NmPcs4XxQjr4KCAVTEtQcOH43lLfDBAmyvV2kusTzjrlNQSlLA52Yf81mLEV6LkjuEjvuBrTNsBjE7uNRZ51p3CdybgoN3QBHvjfgtWhgaJBT6HHtzCigR6t8izZWkawmxpikqoW9Drk1KqQjpaY+P0JEWu29oizy6Vznojb032y0tgsft2YFssZgruLPJsXBmawmfGdYjoXR9+ofMe4WhMRXjgHm72Ba7D30fpjYoFfF7yWYhTYaTGSbirP2BqQYrPYhFFNczH2JjfoITbqMYpWPlXcD3yt9iN43GqBdmFAk8p+R7BjYHCg4VWDzILBQvfsk3Hi4GAU3iwEH2YdtsxO6YqaHnfQKG9ht/rpobDk8IxwwAAAABJRU5ErkJggg=="/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Links</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="22" height="28">
                            <image id="share" width="22" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAABk0lEQVRIiaXVT4hOURjH8Y/xp2zIgpgFSbIRWYiS1Gxshg1LWSjJ3w1rY6mwYTKZsZOmsMKakszCW0guyruRSKGslBE6em7p7Z3Tfe/5be49/U7f+9xzn+d35924dV+B1uA8RjAfMzjbrTrPSsDDeI0lfbxNQwXVXpoDmjRZAt6V8baXgD9kvNm24FPYmvFvLxgQOJrOD6vwED+xu2fPGxxrCt6MK9gZ68O4HvcnAp7a7REudqvOrxq8PPVffJDfeIAzSEd1DYdiX+rZsaj0n7pVZxzjvZUk8Eq8wIqeCvdGO6WH3sFpvG96Zgl8tQdaax1+YAeeNAXWSq+6J+O/awOtwTn9aQOtwfcy/mIsaws+is99vK9Yj2/RIQODE3QjLkd3PI+AWRvdUeFCPGBfU3DT2DyIKSzCUxyPa9LJPgMyO0geD8UQjcU6tenqGPP/9RbbBgmhNJHnIuBvpjzoA03agIk26fYJB/Aqs2d/SR4vzXgLS8CPM95MCTiF0vc5vCMl4I/pb4zpmIUvuIst3arz8i8WSVqwAMX3rAAAAABJRU5ErkJggg=="/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Social</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="23" height="20">
                            <image id="email-icon" width="23" height="16" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAQCAYAAAD9L+QYAAABeklEQVQ4jaXUPUjVYRTH8U+Xu+VWIBHXUWippSFJiCZRqOhl6IUWtRsFRQ2hU9EbhYNDURkVFOUiRUNuLk2CtDkUDQ0R1FCBkC4lKQfOhYv87ab/33bOc/g+5+15NjyfmGzHSdzCV/xRTlvwGfureIebuI6rJcGhH7iMegU1jGEavSXBk9iBo7hUyRJCU9iE7fi+DvBdnMZLHMavgFebAl7gCHbi/RrA53EHM+hqOKsFgdGvTuzFAxxqAd4XWeLDSl4RXPaslmXOob8gZj7jNuNNEWQ1eGg3nmWLvuBK01nMqRsbc4iFqvwDHmU+zC2aRV/6w96F2/k2htcK/4SLOJEDeoWOhF7A0zw7iN+48b/wbwkYwp4m/1gCo1U9Tf7RfNkjreA/cQpncltW6hy2Ffjv42Ne1NBSwBfTWMBAwvsKAK30JGfzqJF4wLfiLwZxHAfWAW7oMd7iNdpiFSPze7mzZcCh4I3jWgw6jGPxPSY4HsZSyQvacBb1ZWhFTPX4DDmbAAAAAElFTkSuQmCC"/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Mail</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="21" height="28">
                            <image width="21" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAACWklEQVQ4jZ3VS6hVdRTH8Y+PTMRSMAryzfEBpySK0+gmDhwINol0FAqORBBFQRooSBRNrQZOHESXQszXRCUVNETTgbvU0i2CGxQUHxn5yDS1jAXr6PFy7vHc+4M/e+//Pvt7/mv912/9h3y7dbfUMLyM6XgTMzEJ4zEWQ3APN3AJ13AeFS7jSlUW9wM03FPNwad4G6N0r4cJXV+rNzZXZfFvK3QGegYAa+oFTIkFBjAmhra8PIa/BgGVKTjQfBieob6DiZmv0YOAXsFbtXpjKn4N6BqsTPiLg1xpA9/lZvZG+MswAl9iC/4bIPAmvsZXWR2LA/oIF7AWn2eZDERHsa4qi/U4HbyAnsUYvIJz2D9A6P6qLG7W6o1I5Wu4HtAjeB0fIkpid25YN4pdP5z38zAZPwV0bxbwCkzAQezpEvoDTtXqjXDix1k52wJ6Cl/gDWzESGzCxecAw0Xb8z6+n41vIvKAPsCG+Ae8n+HfxfcdKuFxRnMdO7AEP+KTqiz+btr0DyzNXC7KlPyMPzGuDfRe2jrAr2IrVldlcVUfm97C8oSeyILuz13h93p2q1jMR02gPl2qqV053sV7+CCvzQVE2fXiEI5XZfGwL6AdtKnjOcJ+OxNctkTSr4Z2epn6PeGP0ygn0+P9qtNKwx1zo/tgfoJ6sowi/2ewL635jFqPkydzWIBVCezUCn/DZ1VZbGudbBf+zGwuPV301llYWKs3XnoeNCwXB123CgdG6+wIvZ2jG91pdwy126jop1HQcbrGMTMt0xC5jpoM18Xm/IIifl+VxT9Pvsb/mVqiWTCHvOUAAAAASUVORK5CYII="/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Achievement</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <router-link to = "/Pageunderconstruction" class="menu-button">
                    <span class="menu-item">
                        <svg width="22" height="28">
                            <image width="22" height="24" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAYCAYAAAD+vg1LAAACQElEQVRIiaWVXYgOYRTHf+9YH0WLtEobFyZbOy7cTHuhFVY+ChebkmxJcUeJ3G1tFC4k4Uq7SlJCXLC+shQrSk2y4SkySUlxoSVF1trt6Dx1GjPzzuZfb++Z8/F/zvPMef5TO3/5BhWwCDgFzAD2A099IHVJbkFQhVXJ1gHtwIEqBWXEc4BmtWcZv7fnmnhl4h3AELBNn0dNzNurJCeM4r1hFE+tRyzdXALOaDee5E/O4r91V8eBO2EUzy8inglcBzYbX0PJziYZewVw35L7ghpwGlhmkh8DV3MIPQaBa+ZZJudiGMXTLfFWYItJugCsBl6XEH8EOnUMPZYCezyxrNBtgs/15f0oIfUYS10iRDeNb18Yxc2BdtaqzhFgF/CzAqmF1AyrLS+0U4hXmoRnwJOcwsnGnpINpi55D9wzrg4hXmwcjwo6GjD23YKcfmO3yDgtMI6XBUW9wAd9H1cKcpyxGxsyMzqaU+BxqyQmGDN2LdBOPFpzCqoiNPa3ILP99v8g3mjst4HeII82YMlEGcMobgLWGtdgoGPij2MacFKv+ERwDGhSWy5WvxB/AQ6ZpOWZa1qv24NGXgUnUpe88RNxFrhtgrsB+Wa1lHDO07oe4xMNP4qRxV/ATuCBqpRgvardgC76SnV5ocbW6FfE4zPQlbpk2BILRK1EN/r0X9AIbNJfGUQKtqcukcX/Iivgcuc3qNp9qkMm+A4cFm1IXfLCBmzHHnIsR4BzOpsdejyzdVq+Au+AhyKXqUv+1WxgHL1Le1XSyxpBAAAAAElFTkSuQmCC"/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Logout</span>
                    <Rarrow/>
                </router-link>
            </li>
            <li>
                <a id="menu-collapse" onclick="SideBar()" class="menu-button">
                    <span class="menu-item" id="menu-collapse-button">
                        <svg width="22" height="22">
                            <image id="Polygon_1" data-name="Polygon 1" width="22" height="22" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACCklEQVQ4jaWVv2tTURTHP5UOikGrSxU6BOfkVYQ6aJ3VBAcLQRLzFxRadIlCUbpYCQ4OpbRrazDRJ8W270UdpUFQyRCxEUHUwV9daism0tISOfUGHpeX5CZ+x3vO+dzv4d13Tte9hw4NdAiIA+cBCzgCbAFfgA/AEyCbjEV/+hX7gfcCV4EU0NPoVqV14A5wNxmL/vEG9miJQeA1MGEAReXcAl5lbDfYCNwHLAMhA6AuqVnO2G6fDpb25xW8U0ntfMZ293nBV4ABk+pKpZKzH+TOAHmf8IBi7X68w8BH4GALZr68svLCXVqcKhUL6xnbdYGIT94GcKxbPammUHGZd5yZhUdzzyfGU62aElZcwGcNXE6WioVfrYgenRPwcb9ItVrN5Z2lmce2kUtd/QLu1Q5/vyuXg87iwkapWNhul6jUK69iUzvs2tnZ7q7Vah0y/0nA37Wz/aGw9WN4ZHT2wtDlUx1yVwX83i8SCAQSl+KJses3b6esE6cPtAkuCfhZk4RIKGylh0dGp9t0/1TAWfWoG6ru/toNI/fCygp4DUgbuIiELSP36WQsulafxzI4XgJhgwua6S1wUmZzfQjJkB4Cvv0H9CtwsT7wvfNY1s2gurUTp4PJWFQYu9I3yCdpBRhTa6eVJEdypf3P3oD80rqkFVlN00BCBopapkdVXH6oN/KkgPu+yxT4C2pyqGBOXHJ2AAAAAElFTkSuQmCC"/>
                        </svg>
                    </span>
                    <span class="menu-item-name">Collapse Menu</span>
                </a>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
import Rarrow from './Rarrow.vue'

export default {
  name: 'sidebar',
  components: {
      Rarrow
  }
}
</script>

<style lang="less">
#sidebar {
	border: 0;
	height: 100vw;
	width: 320px;
	position: fixed;
	background-color: #232730;
	z-index: 0;
	nav {
		margin-top: 100px;
		transition: 0.5s;
		ul {
			list-style-type: none;
			padding-left: 0;
			li {
				a {
					display: inline-block;
					width: 240px;
					line-height: 35px;
					padding-left: 30px;
					padding-right: 50px;
					text-decoration: none;
					color: #a3aab4;
					font-weight: 500;
					font-size: 11pt;
					padding-bottom: 5px;
					padding-top: 5px;
					outline: none;
					transition: 0.5s;
					span {
						display: inline-block;
						vertical-align: middle;
						transition: 0.5s;
					}
					svg {
						vertical-align: middle;
						fill: #a3aab4;
					}
					.r-arrow {
						position: relative;
						left: 29%;
					}
					.menu-item {
						line-height: 100%;
						vertical-align: center;
						text-align: center;
						position: relative;
						width: 30px;
						margin-right: 20px;
					}
					.menu-item-name {
						line-height: 100%;
						vertical-align: center;
						position: relative;
						width: 110px;
					}
					&:hover {
						background-color: #171d2b;
						box-shadow: 0 0 15px rgba(0,0,0,0.3);
					}
					&:active {
						background-color: #171d2b;
						box-shadow: 0 0 15px rgba(0,0,0,0.55);
					}
					&:focus {
						background-color: #171d2b;
						box-shadow: 0 0 15px rgba(0,0,0,0.55);
					}
				}
				a#menu-collapse {
					&:focus {
						background-color: #232730;
						box-shadow: none;
					}
					&:hover {
						background-color: #232730;
						box-shadow: none;
					}
					&:active {
						background-color: #171d2b;
						box-shadow: 0 0 15px rgba(0,0,0,0.3);
						transition: 0.5s;
					}
				}
			}
		}
	}
}
#menu-collapse {
	margin-top: 60px;
}
#comment-count {
	position: absolute;
	width: 25px;
	line-height: 20px;
	background-color: #c96d23;
	color: white;
	text-align: center;
	margin-top: 10px;
	margin-left: 25px;
	border-radius: 6px;
}


</style>