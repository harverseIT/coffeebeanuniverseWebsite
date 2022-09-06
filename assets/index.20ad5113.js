import { r as u, o as l, c as n, a as t, b as p, w as Z, n as g, F as _, d as b, t as h, u as M, p as x, e as B, f, g as C, h as A, i as Y, j as X, k as F, l as K, m as z, q as tt, s as et } from "./vendor.5ba80965.js";
const at = function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) d(a);
    new MutationObserver(a => {
        for (const c of a)
            if (c.type === "childList")
                for (const i of c.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && d(i)
    }).observe(document, { childList: !0, subtree: !0 });

    function o(a) { const c = {}; return a.integrity && (c.integrity = a.integrity), a.referrerpolicy && (c.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? c.credentials = "include" : a.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c }

    function d(a) {
        if (a.ep) return;
        a.ep = !0;
        const c = o(a);
        fetch(a.href, c)
    }
};
at();
var ot = "/assets/logo-primary-nav.330e905e.png";
//const E = [{ path: "/#about", label: "About1" }, { path: "/#features", label: "Features" }, { path: "/blog", label: "Blog" }, { path: "/#gallery", label: "Gallery" }, { path: "/#products", label: "Product" }, { path: "/#contact-us", label: "Contact Us" }];
const E = [{ path: "/#about", label: "About" }, { path: "/#products", label: "Product" }, { path: "/#features", label: "Features" }, { path: "/blog", label: "Blog" }, { path: "/#gallery", label: "Gallery" }, { path: "/#contact-us", label: "Contact Us" }];
var m = (e, s) => { const o = e.__vccOpts || e; for (const [d, a] of s) o[d] = a; return o };
const st = {
        name: "NavTop",
        data() { return { navLogoWhite: ot, maxHeight: 64, isScrolled: !1, menus: E, isMobileOpen: !1 } },
        mounted() {
            let e = this;
            window.addEventListener("scroll", s => { e.isScrolled = window.scrollY > e.maxHeight })
        },
        methods: {
            closeMenu() { this.isMobileOpen = !this.isMobileOpen },
            selected(e) { return this.$route.fullPath === e ? "nav-selected" : "" },
            scrollTo(e) {
                if (this.isMobileOpen && (this.isMobileOpen = !1), e.includes("#")) {
                    let s = document.getElementById(e.substr(2));
                    if (s) {
                        let d = s.getBoundingClientRect().top,
                            a = window.scrollY;
                        console.log(a), window.scrollTo(0, d + a - 120), this.$router.push(e)
                    } else this.$router.push(e).then(o => { this.scrollTo(e) })
                } else this.$router.push(e)
            }
        }
    },
    lt = { class: "navb" },
    nt = ["src"],
    it = ["onClick"],
    ct = { class: g("nav-mobile block") },
    rt = ["onClick"];

function dt(e, s, o, d, a, c) { const i = u("router-link"); return l(), n("div", { class: g("relative navbar " + (a.isScrolled ? "shadow-md" : "")) }, [t("div", lt, [p(i, { to: "/", class: "nav-brand" }, { default: Z(() => [t("img", { class: "w-full h-full", src: a.navLogoWhite }, null, 8, nt)]), _: 1 }), t("span", { class: g("nav-divider " + (a.isScrolled ? "anim-nav-close" : "anim-nav-open")) }, null, 2), t("div", { class: g("nav-menu " + (a.isScrolled ? "anim-nav-menu-open" : "anim-nav-menu-close")) }, [(l(!0), n(_, null, b(a.menus, r => (l(), n("p", { onClick: v => c.scrollTo(r.path), class: g("nav-mobile-item " + c.selected(r.path)) }, h(r.label), 11, it))), 256))], 2), t("div", ct, [t("div", { class: "nav-caret", onClick: s[0] || (s[0] = r => c.closeMenu()) }, [t("span", { class: g("caret " + (a.isMobileOpen ? "active" : "")) }, null, 2)]), t("div", { class: g("nav-mobile-menu " + (a.isMobileOpen ? "flex" : "hidden")) }, [(l(!0), n(_, null, b(a.menus, r => (l(), n("p", { onClick: v => c.scrollTo(r.path), class: g("nav-mobile-item " + c.selected(r.path)) }, h(r.label), 11, rt))), 256))], 2)])])], 2) }
var pt = m(st, [
        ["render", dt],
        ["__scopeId", "data-v-0e71c01a"]
    ]),
    ht = "/assets/footer-logo.e0b5da9a.png",
    ut = "/assets/alga-creative.b49770a3.png",
    vt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM1SURBVHgB7ZpNThsxFMffs4euusgRpjsEQUwDBxgClboDTkC4ATcgPQFwgiYnoMtKLTDLSnxoqqYou84RqNQu2jB2n0GtIuqZYZxGHWf8kyKI33uJ/M/YfvYzgMPhcNQYzDP6Qdh4yvmOBAjATqLPlyf9PIdMARaCFwHj4oz+bYDF0I+XpOnc2jB+m+jsTNc4H7z0kYtjsLzzCvqFfY+PXmfZtQJw9nNLBcLsEDZXw1Bn0AoAUto65jMRgvm6dgY1xwkA5kSAuHY7lz5TLyHlrpQyAcvwwASUrwYXp90HrT31aq5udGkO2QdLKP0E0Lra03T+D4OL98oWgSWUFgAx7Rf6AByBJZQWYHARRUU+ozSNwRLcKgAlycqoxvE8zwdLKD8JSr5T7CM7YAnlJ0GAzmKrvZdlb7Y29smnUKSqYJQHIOLB4sr6smTp0fV5dDfh3Q0NyWn9lyFYhFkiBPdPAgreaa6s3zdIsBK3CkDNMZsD1MaHsURnS6VscIDjh+3yPj3WxqjzB5pXgrH3NwKxz6WMx78HhfBT8qPv3yR/H/4BRgKMhIiGV6eJzjYfhD5w/lc7LY3966vTni6m2Wp36U+gdpPI2O7g8iSCfPaWVta3aAd6MKkQlRkC1Pn4uxDPaTMVPcb/0+XJmznyp8CJ0u5KCCARv6RCbCdxdFMmLib/W4qjTygVN04lBFBn98M4SsCAuzjJjHefM7EKeOL2EAyptACqMvUYPzUUaBwZzQXGmeC0WGi1OwxR7SVC9Z5S7oSWwu3r83e5HZQy/YjISh/nV+oJUBsp6ryq4oS/21SBhglxFhQ8DbQcJmBAZQRQ5TjKsLoZ5saIsU5ePGYlWQVURgCP/djLdUAMYQpUZwggWy7wKLIbURkB/lcx1po8AKdUqrcpEaq9AFPBCQA1xwkANccJADXHCQA1xxVGwACP882lVvurziYsu15reiR2SEfZWkPW7Wt10kOF1Mw7u4+prVK8nCReh5sDoOY4AbStaHbGXmUEFXR17VoBqOjYs/Hebw5HWaU3rQCq0kLFyrVZEIFWpf63NO3m2PNprm6E6mICWMjoiYiGH8yKrg6Hw1ELfgGG1xKLrbSGhwAAAABJRU5ErkJggg==",
    _t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP/SURBVHgB7ZvPT9RQEMdnXtebiXsiMR5c4oUgxvLjbhEOHte/QPwP+A+AvwT4C+ToQdh6ByxxIZykXjTh4pp4Y9vnTHdXN9J2292d/sB+EsjS9hXm2+l7M/MGgIqKior/GIQJaJhW/X4NTNDGcx9glm72ADJAA/xUAFeA3ln72LZhAsYSYGHFssjoLfpo0lcd8qVDXzYZsv/55PAAUpJKgCHDLSgg5Bmu591bvXTeu0nHGEkvXFhaJ8Nxjz42oKDQ06wr5W/OPJyF6+9XH5OMSSRAYDzqbSgLiFZSEUYKUDrjByQUIXYOmDNfNWrGzRWUGfRW41YKFTfWMG5aUHZ6k3YkkQI8W15rYoEnvBRYweoVQaQAtKS8gSKitUPfD7TWbvIhxmbUuZhXQFtQNFDvtE+PFtsnh6/v+f4iHbETDQN4EXPuNgsr6xTw6EK9//TEnXMyfvjYvGmZyjA+JRnve97ihWM7/x4P9QDt+yYUDYRbf3yYQZEoFWqTCv9dugEFAwGbJiVfw8fml15uJB2vIib0cA/QuSc4YdS7hrHLsQn/wDM7Im4lHawRHocdr0G5aFJg1lxYXguWqYly+T75CKA1p7CuRnSwl07X6ZhJ4Wvmnpe1ADYZuUPLmB12klcfmu03MMMYJBMBOGhBpd62jz/Ycdf1z9skxB6tRLv0jjdAGAXCsPGe76+OMn4YvpbHpIn2xkVUgIHxl47tQkp4TBYiiArAbj+O8QN4LN8DBBETgFapvTRuH8VgXgAhxARA9PZhWtDKAUJICdCZtF4/TM8Lgthh6kgJkDxJSYpWLgggIgDv3MCU0do7AwGEPED/gClDq4HItpuMABok6gkieYKIADIhrBYp0khNgvW4SmxaghIdYHk8IGBEPT7VrShDBCEkQ2FrGl4QVH4E02PhZOhvCWsceCzfAwSRTYaoEFlT3XfjiMBjeGtOendKvB5AmxkmG5LmdeBrszCeyaQiFBiijdbT5bU9TpKi8oQ/HSgarGkUPJOQaU2QjNogAzeoqsuJDecLHQqbO6iRCqK0F5FDOT6vsjgbavGH4EmjhryQnwMKTvjWGIJI7p0n5GRfw46Hb40BunDH0BD+UMM9QKnpFzRyBpUfalOoALVu15EqQeVEZIkuVADHscl4vDNeQO4f2UIbvQoIVmKzJq5CHRtwUcDCbTIWlBjeWTo/PZqNOh8fB9wBL+Dttbjzsa2y19++uDOPnrCXWFBGUO9cnLZiW+hH9gqTCHYpReCWuuOj7VGXJeoWL50ICY0PLoUUzJlWw1CqlUXjwpj0OlBSbMqOlXZzH3G/lbYJecP9RkgxS0rDB0xcd+h3leb0T1N49ouiVjcI3CoqKioqUvMbjZZ/YxSp+lkAAAAASUVORK5CYII=",
    gt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPTSURBVHgB7ZrNTttAEMdn7eTUSk3VQ49NbwhS1QR6d4BK7Ql4AugTFJ6A8AT0DQhvEG498OFjpQYa1FBxqESOHHoIUnsi6+1MCJVx107irInj7O8Sx/banv/OjndnDKDRaDQajUYzoTCIQN6yc48zYIEwX7sAL/EiT2AECIBrA+ASGD9r1BwHIjCQAIV52xbCXMNGK/g3B8mihYJUOc9uX9Q/N/tt1JcAnR43zV24NTzxoBCVfoXoKcCU9S5vmjfHeGIexggUoYkilHqJECrAuBp/B4mQ5Xy2XndaQecYYRdA48vjajxBz96+Hbph58ih3s+YN5eQBhgvBb0lAj2Aeh9SghDGWtCxQAEYiGVICQzYioVvMtkxqQCF+SUbmyXtPT8MuTZN3CRIBRCuKz15nBGu0b8A6P55SBk4DPKy/XIPEImb5g6NYEK6XjFAAYKxzcbJIXMNPiuEaEJMdK7NWInuhduboAAVAjjntYNPtPHjq1PnrlvCzSqop/rHdWcbtQOH/pyfHtE9HRgSJR7g5aLuNLGHVrGntkEVTGzTNZshU9qoqBDAnikubPh3Yk/RNHoVHTf6QwtsSy5fOyr7D83MLdLkxoYhUeIBjLGdQnFhy7//+8lhtc3dSHGB2rQ9Lu/lVXFhB8WtgALUDQHGyoW5xWNaQ3h305DIoiEwQFxA4/ZovFNb737KS9A9MOhugCJUxwCbls9+EWg52ndcwPGOnrPuH+/T1lvrkWl+AwVu70V5EKQlKK0iw+JCwJBwgsY79vpHw3RjyUtkICa6ceFJ4/ToXq9TXMCf6vQb2zJEJocv9NxNltcvvtx39ztovGNiQ5nL+4lNgA4UF4pLK203s+pPTdGcIaxpNx+xKxS7vB/lQ+A/mLBkcSEMyj5TG4jZeCJeD+jyLy7MLVYY43tB2RkyHGsNW5jMsyMVLCLwIALcgUato4HrGNQowtMQoFx+iwlmoafkYQSLsAcVwAMZatNGp6eZgFERfwxIOFoAmHC0ADDhaAFgwpGnxRkoTz2NGpxsXcv2y9PiwJqQMgTIs1JyDzCM0JXaOMIMV2qTVIBMu10fKpmZPFoDlccphSVcsQ8pQYTkI4PL46ZZgZTAOQ/MRQYK0E1Hx1HheVDoizF/dtlL6Dwgw/mHOGt9cUPPHtb7RKgAFAuo1jeOInSMx2cP633ChB78umq2nj1/sY+vxqeYvBiXDyeokPr+Z9256nXiQKm3KcvOm6ZZxlT2Mk4Xk/UNAdYRsWJUxXT8nqycFkTk3GPnOyIhEvKxNDv7jXOXOKrHGo1Go9FoNKnlLyxOl+1142gIAAAAAElFTkSuQmCC",
    mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATNSURBVHgB7ZvPTxtHFMffzBoJtZFqkgYLeqhNpSahVHUCkdLbplCJnkKOPRH+gjR/Ac5fUPIXQG+9FU5t1TQst0rQZisRK4eodi/FSnJw1ERqxc5M3iN25Fhr7+54WGYVfy4s3jH4fffNzPsxBhgyZMiQtxgGCZmZc12pnCV843utl7wXQmzVfa8JGSS2AOfLi8Wcc7iOl273PQVQV5xfr+7+4kPGiCXAJ7PzyzhwDS/zvcaQCCNCXPQz5gk8asCF2Xly9w3oYzyBY4qB4/wAGcPpd/PI7bn8ES9HIR7FsxOlZ08Oar9BRujrAY5zuA0RT74bxtgqCQcZoacA05e+uEFuDcnJ53iQmanQUwDO2DLowlT507mFbyEDhO4CrS2vBgP/dXF1f8/zwGJCPWDEOSyDAZRy1stlN9EakjahAiglXTBAa2tcB4vpIQCYfGpLFEiBpUQGQiagKNLWqZCKAEg+yIGRdcU0oQIwBubjecldsJDwNQBYHQwjOb8PFhLuAZwbTWuVUvXq3t0tsJBQAXJBgAIoM9NAqaaQ8ipYSqgAr3J6ZsQLJBr/0PfqYCk9dwF024FdVnK1UvU9q6tEPQUYkXJjkGmgGLtV3b23AZbTsyDSaNT/Ozs5dQGDGK39+8Hvv34FGaBvIITFjQ3QhKrHkAH6CrC/d9fDHx7ooJxVyADRoTBjt0EPNwtFESdqwON//qqPT06N4eUVSM6VwuTUn48Pag/BUmIlQzkhKro7AvYL1qcvf2llIkREegBxtCNMlP7HRXERkjOKQcXimcK5raeNR9Y1TRL1Bmdm56lM7oIG1DkSYgSjwp/qYBGJ6gGBECu6U4HKY9RnsK0wEmsKtHnaqDcHmAokQl4yZ/F04eOfbZkOiStCD/64R03SO6AL9gxaXWYrSHw+gCA3DjjfxhhBe3WX2ElOkigV8X+ecpxlXFDHMM+o4XqyY2I90aoJUrocSHmdCh2gCc/FrzxTVRmNp0bNGoq+St1qWk9MVJu1PKDN9GW3zKWTuNSFwvk4lS7GGTtzaWEVp02lz5DNQIzc0vWGgarC1V3Pl0qtJHkPGf+iq0JE7o1b7M3usTGMJ5YG8YaBPKDNzNxCBS2LTH7axneeJyLj383ltplSZYoVGBMrzwPwT/HczRjGvwHuTmtOENxOckrFiABElAhRxoMhkgZcieKAfmDS5I1/8BEJ6nbfS8t4gmINzuU34xMlwCRsJ2q8MQGIMBHSNP4NGHMxi3VPF87t9Au6jE2BTuh0CcUIuMLWngvxXerGdxB1hO9YBOhF2sZ30MSUvhS2OKbVHD1J44n8Iec3wm6kIsAJG38EA1YMez0VAUbxCTApwUZSEYBaY/sU+uoXWAdGMQgN2VNbAwgss1codB4kidJFCBEaExiNA+Lw5KDmnyl8uIUt+DHdrpMGd6r3t78Pu5G6AARVllCIzfcnSn/jr2WM4Y+tTEbehoHY100s7IbdPxEB2hy7N7w6m/D5I99r9BqSaiDUj/NlF4umTgU/kJEjdfTkFRZtoqpO1gjQ5rUQSl0D/anhUQU7zsEM6wRoQ8HTO5wvccau4eN0Y4rh0VbbaurGwloBusF6g4tCfIbhVKnjC1uU7DxzMOP8V8rNrH5xa8iQIUNOjJeVLBWbcFIVXAAAAABJRU5ErkJggg==";
const ft = [{ label: "Coffee Bean Universe", source: "https://www.linkedin.com/in/coffee-bean-universe/", image: vt }, { label: "coffeebeanuniverse.id", source: `https://www.instagram.com/coffeebeanuniverse.id/
`, image: _t }, { label: "marketing.ijennusantara@gmail.com", source: "mailto:marketing.ijennusantara@gmail.com", image: gt }, { label: "+6285156077857", source: "https://wa.me/6285156077857", image: mt }],
    //bt = [{ label: "About2", path: "/#about" }, { label: "Features", path: "/#features" }, { label: "Product", path: "/#products" }, { label: "Gallery", path: "/#gallery" }, { label: "Blog", path: "/blog" }];
    bt = [{ label: "About", path: "/#about" }, { label: "Product", path: "/#products" }, { label: "Features", path: "/#features" }, { label: "Gallery", path: "/#gallery" }, { label: "Blog", path: "/blog" }];
var R = { footerNavContact: ft, footerNavHome: bt };
const H = e => (x("data-v-7c9795d3"), e = e(), B(), e),
    Ct = { class: "footer" },
    At = { class: "q-container flex flex-col md:flex-row" },
    wt = { class: "w-full md:w-1/2 md:pr-12 md:pb-0 pb-12" },
    yt = { class: "footer-brand" },
    Lt = ["src"],
    Mt = H(() => t("p", null, [f(" Selling best coffee product from Ijen Crater and Mount Raung, East Java,"), t("br"), f("Indonesia ")], -1)),
    xt = { class: "w-full md:w-1/2 md:pl-24" },
    Bt = { class: "footer-nav" },
    Zt = { class: "footer-menu" },
    Ht = ["onClick"],
    kt = { class: "footer-menu" },
    It = H(() => t("p", { class: "footer-title" }, " Contact Us ", -1)),
    Pt = ["onClick", "href"],
    St = ["src"],
    Tt = { class: "footer-copyright" },
    Qt = H(() => t("p", null, [f("Copyright"), t("sup", null, "\xA9"), f(" 2021 Coffee Bean Universe. All Right Reserved. Developed By:")], -1)),
    $t = ["src"],
    Ut = {
        setup(e) {
            const { footerNavContact: s, footerNavHome: o } = R;

            function d(a) { window.open(a, "_blank") }
            return (a, c) => (l(), n("div", Ct, [t("div", At, [t("div", wt, [t("div", yt, [t("img", { src: M(ht), class: "footer-logo" }, null, 8, Lt), Mt])]), t("div", xt, [t("div", Bt, [t("div", Zt, [t("p", { onClick: c[0] || (c[0] = i => a.$router.push("/")), class: "cursor-pointer footer-title" }, " Home "), (l(!0), n(_, null, b(M(o), i => (l(), n("p", { onClick: r => a.$router.push(i.path), class: "cursor-pointer" }, h(i.label), 9, Ht))), 256))]), t("div", kt, [It, (l(!0), n(_, null, b(M(s), i => (l(), n("div", { onClick: r => d(i.source), href: i.source, class: "cursor-pointer flex flex-row gap-3 md:gap-6 items-center" }, [t("img", { src: i.image, class: "footer-icon" }, null, 8, St), t("p", null, h(i.label), 1)], 8, Pt))), 256))])])])]), t("div", Tt, [Qt, t("img", { src: M(ut), class: "h-6" }, null, 8, $t)])]))
        }
    };
var Nt = m(Ut, [
    ["__scopeId", "data-v-7c9795d3"]
]);
const Yt = { components: { Footer: Nt, NavTop: pt } };

function Ft(e, s, o, d, a, c) {
    const i = u("NavTop"),
        r = u("router-view"),
        v = u("Footer");
    return l(), n(_, null, [p(i), p(r), p(v)], 64)
}
var Et = m(Yt, [
    ["render", Ft]
]);
var Rt = "/assets/banner.f043cc6a.png";
const Vt = { name: "HomeBrand", data() { return { about: Rt, menus: E } } },
    Gt = e => (x("data-v-2c2bd422"), e = e(), B(), e),
    jt = { class: "q-container relative mt-40 mb-0 md:mb-40" },
    Dt = { class: "q-row" },
    Jt = Gt(() => t("div", { class: "brand-y" }, [t("p", { class: "text-brand" }, [f(" Selling the"), t("span", { class: "n" }, " greatest taste of coffee "), f("product"), t("br")]), t("p", { class: "text-sub-brand" }, " from the highland paradise across the world ")], -1)),
    Ot = { class: "q-col right-brand" },
    qt = ["onClick"],
    Wt = { class: "q-row w-full mt-12 md:mt-24 h-96 relative md:flex-row flex-col items-center" },
    Xt = ["src"],
    Kt = C('<div class="sm:flex hidden md:gap-4 w-full md:w-96 h-96 md:absolute bg-secondary-2 top-0 right-0" data-v-2c2bd422><div class="flex w-full justify-center items-center relative md:-top-10 text-white-1" data-v-2c2bd422><p class="product-nav" data-v-2c2bd422> See Products </p><svg class="w-16 h-16" width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2c2bd422><path d="M30.5 2C30.5 1.17157 29.8284 0.5 29 0.5C28.1716 0.5 27.5 1.17157 27.5 2L30.5 2ZM27.9393 57.0607C28.5251 57.6464 29.4749 57.6464 30.0607 57.0607L39.6066 47.5147C40.1924 46.9289 40.1924 45.9792 39.6066 45.3934C39.0208 44.8076 38.0711 44.8076 37.4853 45.3934L29 53.8787L20.5147 45.3934C19.9289 44.8076 18.9792 44.8076 18.3934 45.3934C17.8076 45.9792 17.8076 46.9289 18.3934 47.5147L27.9393 57.0607ZM27.5 2L27.5 56L30.5 56L30.5 2L27.5 2Z" fill="white" data-v-2c2bd422></path></svg></div></div><a class="md:hidden block btn mt-4 bg-secondary-1 text-white hover:bg-secondary-2" data-v-2c2bd422> See Products </a>', 2),
    zt = C('<svg class="md:absolute md:mx-0 mx-auto w-full max-w-full h-40 md:h-80 md:-bottom-40 md:-right-52" width="1036" height="259" viewBox="0 0 1036 259" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2c2bd422><path opacity="0.8" d="M6.10352e-05 129.5C71.5209 129.5 129.5 187.479 129.5 259L6.66958e-05 259L6.10352e-05 129.5Z" fill="#7A594A" data-v-2c2bd422></path><path opacity="0.8" d="M1036 129.5C1036 57.9791 978.021 3.55863e-05 906.5 4.18388e-05L906.5 259C978.021 259 1036 201.021 1036 129.5Z" fill="#202735" data-v-2c2bd422></path><path opacity="0.8" d="M518 129.5C446.479 129.5 388.5 71.5209 388.5 2.09194e-05L518 1.52588e-05L518 129.5Z" fill="#2C3343" data-v-2c2bd422></path><path opacity="0.8" d="M906.5 259C978.021 259 1036 201.021 1036 129.5L777 129.5C777 201.021 834.979 259 906.5 259Z" fill="#7A594A" data-v-2c2bd422></path><path opacity="0.8" d="M647.5 129.5C719.021 129.5 777 187.479 777 259L647.5 259L647.5 129.5Z" fill="#202735" data-v-2c2bd422></path><path opacity="0.8" d="M777 129.5C848.521 129.5 906.5 187.479 906.5 259L777 259L777 129.5Z" fill="#202735" data-v-2c2bd422></path><path opacity="0.8" d="M0 129.5C0 201.021 57.9791 259 129.5 259V0C57.9791 0 0 57.9791 0 129.5Z" fill="#2C3343" data-v-2c2bd422></path><path opacity="0.8" d="M259 129.5C187.479 129.5 129.5 187.479 129.5 259L388.5 259C388.5 187.479 330.521 129.5 259 129.5Z" fill="#202735" data-v-2c2bd422></path><path opacity="0.8" d="M129.5 129.5C129.5 201.021 187.479 259 259 259V1.52588e-05C187.479 1.52588e-05 129.5 57.9791 129.5 129.5Z" fill="#AABCC6" data-v-2c2bd422></path><path opacity="0.8" d="M388.5 259C460.021 259 518 201.021 518 129.5L259 129.5C259 201.021 316.979 259 388.5 259Z" fill="#AABCC6" data-v-2c2bd422></path><path opacity="0.8" d="M388.5 129.5C460.021 129.5 518 71.5209 518 3.93754e-06L259 1.52588e-05C259 71.5209 316.979 129.5 388.5 129.5Z" fill="#7A594A" data-v-2c2bd422></path><path opacity="0.8" d="M647.5 2.09194e-05C719.021 2.40457e-05 777 57.9791 777 129.5L518 129.5C518 57.9791 575.979 1.77931e-05 647.5 2.09194e-05Z" fill="#7A594A" data-v-2c2bd422></path><path opacity="0.8" d="M647.5 129.5C719.021 129.5 777 187.479 777 259L518 259C518 187.479 575.979 129.5 647.5 129.5Z" fill="#202735" data-v-2c2bd422></path><path opacity="0.8" d="M777 129.5C848.521 129.5 906.5 71.5209 906.5 3.93754e-06L647.5 1.52588e-05C647.5 71.5209 705.479 129.5 777 129.5Z" fill="#AABCC6" data-v-2c2bd422></path></svg>', 1);

function te(e, s, o, d, a, c) { return l(), n("div", jt, [t("div", Dt, [Jt, t("div", Ot, [(l(!0), n(_, null, b(a.menus, i => (l(), n("a", { onClick: r => e.$router.push(i.path), class: "cursor-pointer" }, h(i.label), 9, qt))), 256))])]), t("div", Wt, [t("img", { src: a.about, class: "h-full w-full object-cover" }, null, 8, Xt), Kt]), zt]) }
var ee = m(Vt, [
    ["render", te],
    ["__scopeId", "data-v-2c2bd422"]
]);
const ae = { name: "SectionTitle", props: ["title", "isSmall", "isBig", "isWhite", "isPrimary", "withoutDivider"] },
    oe = { class: "section-title" };

function se(e, s, o, d, a, c) { return l(), n("div", oe, [o.withoutDivider ? A("", !0) : (l(), n("span", { key: 0, class: g(o.isPrimary ? "is-primary" : "") }, null, 2)), t("p", { class: g("whitespace-pre-wrap md:whitespace-nowrap " + o.isBig ? "is-big" : o.isSmall ? "is-small" : "") }, h(o.title), 3)]) }
var L = m(ae, [
        ["render", se],
        ["__scopeId", "data-v-18e7f9c7"]
    ]),
    le = "/assets/ArabicaJava.jpg",
    ne = "/assets/Robusta Java.5a705ef7.jpg",
    ie = "/assets/Luwak Coffee.25c10328.jpg";
const ce = [{ name: "Arabica Java", description: "Characteristically slight herbs aroma with medium consistency, medium acidity and balanced taste. Planted around Mount Ijen & Raung at the altitude 1000-1500 masl. Moisture content maximum about 12%. Semi-wash, full-wash or Natural post-harvest process.", image: le, source: "https://wa.me/6285156077857" }, { name: "Robusta Java", description: "Has a thick firm taste of bitter caffeine. Planted around Mount Ijen & Raung.  Moisture content maximum about 12%. Semi-wash, full wash, or Natural post-harvest process.", image: ne, source: "https://wa.me/6285156077857" }, { name: "Luwak Coffee", description: "Arabica or Robusta red cherries undergoes fermented by chemical treatments into luwak's stomach. The flavour  mainly defined in terms of earthy and musty with hints of caramel and chocolate.", image: ie, source: "https://wa.me/6285156077857" }];
const re = { name: "HomeProducts", components: { SectionTitle: L }, data() { return { products: ce } } },
    de = { class: "bg-img-rose", id: "products" },
    pe = { class: "q-container py-0 md:py-16" },
    he = { class: "product-container" },
    ue = { class: "product-subcontainer" },
    ve = { class: "product-title" },
    _e = { class: "product-description" },
    ge = { class: "product-sm-title" },
    me = ["href"],
    fe = ["href"],
    be = ["src"];

function Ce(e, s, o, d, a, c) { const i = u("SectionTitle"); return l(), n("div", de, [t("div", pe, [p(i, { title: "Our Product" }), (l(!0), n(_, null, b(a.products, r => (l(), n("div", he, [t("div", ue, [t("p", ve, h(r.name), 1), t("div", _e, [t("p", ge, h(r.name), 1), (l(), Y(X("p"), { innerHTML: r.description }, null, 8, ["innerHTML"])), t("a", { target: "_blank", rel: "noreferrer noopener", href: r.source, class: "btn-sm" }, "Order Now", 8, me)]), t("a", { target: "_blank", rel: "noreferrer noopener", href: r.source, class: "btn" }, "Order Now", 8, fe)]), t("img", { src: r.image, class: "product-image" }, null, 8, be)]))), 256))])]) }
var Ae = m(re, [
        ["render", Ce],
        ["__scopeId", "data-v-142cad0b"]
    ]),
    we = "/assets/about.dd9017da.png",
    ye = "/assets/logo-primary-full.8f0a3d01.png";
const V = e => (x("data-v-83c74e1e"), e = e(), B(), e),
    Le = { class: "about-bg" },
    Me = { class: "q-container pt-0 md:pt-24 md:pb-64" },
    xe = { class: "about-container" },
    Be = { class: "relative max-w-3xl" },
    Ze = V(() => t("span", { class: "about-description-shadow" }, null, -1)),
    He = ["src"],
    ke = C('<svg class="about-svg" width="194" height="130" viewBox="0 0 194 130" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-83c74e1e><path opacity="0.8" d="M64.6667 64.6666C28.9523 64.6666 -1.26554e-06 93.6189 -2.82667e-06 129.333L129.333 129.333C129.333 93.6189 100.381 64.6666 64.6667 64.6666Z" fill="#202735" data-v-83c74e1e></path><path opacity="0.8" d="M0 64.6667C0 100.381 28.9523 129.333 64.6667 129.333V0C28.9523 0 0 28.9523 0 64.6667Z" fill="#AABCC6" data-v-83c74e1e></path><path opacity="0.8" d="M129.333 129.333C165.048 129.333 194 100.381 194 64.6667L64.6667 64.6667C64.6667 100.381 93.6189 129.333 129.333 129.333Z" fill="#AABCC6" data-v-83c74e1e></path><path opacity="0.8" d="M129.333 64.6666C165.048 64.6666 194 35.7144 194 -5.14297e-05L64.6667 -4.57764e-05C64.6667 35.7144 93.6189 64.6666 129.333 64.6666Z" fill="#7A594A" data-v-83c74e1e></path></svg>', 1),
    Ie = { class: "about-sub-container" },
    Pe = { class: "relative" },
    Se = { class: "h-72 m-8 absolute bb" },
    Te = ["src"],
    Qe = V(() => t("div", { class: "about-box" }, [t("p", { class: "about-description" }, [f(" We collaborate with coffee "), t("b", null, "farmers and experter"), f(" near "), t("b", null, "Mount Ijen"), f(" and "), t("b", null, "Mount Raung"), f(" that planted at an altitude of +/-1500 masl to sell "), t("b", null, "our unique taste"), f(" of coffee around the world. We start production from picking coffee cherries that have turned red. Then post-harvest treatment is carried out carefully and monitored by people who are competent to produce green bean coffee with a unique taste. ")])], -1)),
    $e = { setup(e) { return (s, o) => (l(), n("div", Le, [t("div", Me, [p(L, { title: "About Us", "is-big": !0, id: "about" }), t("div", xe, [t("div", Be, [Ze, t("img", { src: M(we), class: "about-image w-full" }, null, 8, He), ke]), t("div", Ie, [t("div", Pe, [t("div", Se, [t("img", { src: M(ye), class: "about-brand" }, null, 8, Te)])]), Qe])])])])) } };
var Ue = m($e, [
        ["__scopeId", "data-v-83c74e1e"]
    ]),
    Ne = "/assets/logo-overlay.70c1f9c2.png";
const Ye = { class: "w-full min-h-screen bg-secondary-3 relative", id: "features" },
    Fe = { class: "text-primary-1 relative md:pt-96 pb-32 z-30" },
    Ee = { class: "why-container" },
    Re = C('<svg class="h-80 w-full -mt-4 md:block hidden" width="907" height="259" viewBox="0 0 907 259" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-28a336b6><path opacity="0.8" d="M906.5 129.5C834.979 129.5 777 187.479 777 259L906.5 259L906.5 129.5Z" fill="#7A594A" data-v-28a336b6></path><path opacity="0.8" d="M388.5 129.5C460.021 129.5 518 71.5209 518 2.09194e-05L388.5 1.52588e-05L388.5 129.5Z" fill="#2C3343" data-v-28a336b6></path><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M2.09194e-05 129.5L129.5 129.5C129.5 201.021 71.5209 259 1.52588e-05 259L2.09194e-05 129.5Z" fill="#7A594A" data-v-28a336b6></path><path opacity="0.8" d="M259 129.5C187.479 129.5 129.5 187.479 129.5 259L259 259L259 129.5Z" fill="#202735" data-v-28a336b6></path><path opacity="0.8" d="M129.5 129.5C57.9791 129.5 1.27244e-05 187.479 9.59816e-06 259L129.5 259L129.5 129.5Z" fill="#202735" data-v-28a336b6></path><path opacity="0.8" d="M906.5 129.5C906.5 201.021 848.521 259 777 259V0C848.521 0 906.5 57.9791 906.5 129.5Z" fill="#2C3343" data-v-28a336b6></path><path opacity="0.8" d="M647.5 129.5C719.021 129.5 777 187.479 777 259L518 259C518 187.479 575.979 129.5 647.5 129.5Z" fill="#202735" data-v-28a336b6></path><path opacity="0.8" d="M777 129.5C777 201.021 719.021 259 647.5 259V0C719.021 0 777 57.9791 777 129.5Z" fill="#AABCC6" data-v-28a336b6></path><path opacity="0.8" d="M518 259C446.479 259 388.5 201.021 388.5 129.5L647.5 129.5C647.5 201.021 589.521 259 518 259Z" fill="#AABCC6" data-v-28a336b6></path><path opacity="0.8" d="M518 129.5C446.479 129.5 388.5 71.5209 388.5 3.93754e-06L647.5 1.52588e-05C647.5 71.5209 589.521 129.5 518 129.5Z" fill="#7A594A" data-v-28a336b6></path><path opacity="0.8" d="M259 5.66062e-06C187.479 8.7869e-06 129.5 57.9791 129.5 129.5L388.5 129.5C388.5 57.9791 330.521 2.53435e-06 259 5.66062e-06Z" fill="#7A594A" data-v-28a336b6></path><path opacity="0.8" d="M259 129.5C187.479 129.5 129.5 187.479 129.5 259L388.5 259C388.5 187.479 330.521 129.5 259 129.5Z" fill="#202735" data-v-28a336b6></path><path opacity="0.8" d="M129.5 129.5C57.9791 129.5 3.30519e-05 71.5209 3.61782e-05 3.93754e-06L259 1.52588e-05C259 71.5209 201.021 129.5 129.5 129.5Z" fill="#AABCC6" data-v-28a336b6></path></svg>', 1),
    Ve = C('<div class="mx-auto max-w-4xl flex md:flex-row flex-col" data-v-28a336b6><div class="card-col" data-v-28a336b6><div class="card bg-primary-3" data-v-28a336b6><div class="w-16 h-16 rounded-full bg-primary-0 p-3 flex items-center justify-center" data-v-28a336b6><svg class="w-full" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-28a336b6><path d="M14.5 2.33337C8.06004 2.33337 2.83337 7.56004 2.83337 14C2.83337 20.44 8.06004 25.6667 14.5 25.6667C20.94 25.6667 26.1667 20.44 26.1667 14C26.1667 7.56004 20.94 2.33337 14.5 2.33337ZM8.20004 13.1017C8.39837 11.7134 9.01671 10.465 9.98504 9.48504C12.3184 7.16337 15.9934 7.03504 18.49 9.06504V7.95671C18.49 7.47837 18.8867 7.08171 19.365 7.08171C19.8434 7.08171 20.24 7.47837 20.24 7.95671V11.0717C20.24 11.55 19.8434 11.9467 19.365 11.9467H16.25C15.7717 11.9467 15.375 11.55 15.375 11.0717C15.375 10.5934 15.7717 10.1967 16.25 10.1967H17.125C15.3167 8.93671 12.82 9.11171 11.21 10.7217C10.51 11.4217 10.0667 12.3317 9.91504 13.3467C9.85671 13.7784 9.48337 14.0934 9.05171 14.0934C9.00504 14.0934 8.97004 14.0934 8.92337 14.0817C8.46837 14.0234 8.13004 13.58 8.20004 13.1017ZM19.015 18.515C17.7667 19.7634 16.1334 20.3817 14.5 20.3817C13.0767 20.3817 11.665 19.88 10.4984 18.935V20.0317C10.4984 20.51 10.1017 20.9067 9.62337 20.9067C9.14504 20.9067 8.74837 20.51 8.74837 20.0317V16.9167C8.74837 16.4384 9.14504 16.0417 9.62337 16.0417H12.7384C13.2167 16.0417 13.6134 16.4384 13.6134 16.9167C13.6134 17.395 13.2167 17.7917 12.7384 17.7917H11.8634C13.6717 19.0517 16.1684 18.8767 17.7784 17.2667C18.4784 16.5667 18.9217 15.6567 19.0734 14.6417C19.1434 14.1634 19.575 13.825 20.065 13.895C20.5434 13.965 20.87 14.4084 20.8117 14.8867C20.6017 16.2984 19.9834 17.5467 19.015 18.515Z" fill="#F6F1EE" data-v-28a336b6></path></svg></div><p class="item" data-v-28a336b6> We are developing an Innovation includes <b data-v-28a336b6>inventing</b>, <b data-v-28a336b6>designing</b>, and of course <b data-v-28a336b6>evolving</b> products services that have high appeal in the marketplace and strengthen customer to collaborate with us. </p></div><div class="card bg-secondary-2" data-v-28a336b6><div class="w-16 h-16 rounded-full bg-primary-0 p-3 flex items-center justify-center" data-v-28a336b6><svg class="w-full" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-28a336b6><path d="M21.6299 4.80669L15.2133 2.40335C14.5483 2.15835 13.4633 2.15835 12.7983 2.40335L6.3816 4.80669C5.14493 5.27335 4.1416 6.72002 4.1416 8.03835V17.4884C4.1416 18.4334 4.75993 19.6817 5.51827 20.2417L11.9349 25.0367C13.0666 25.8884 14.9216 25.8884 16.0533 25.0367L22.4699 20.2417C23.2283 19.67 23.8466 18.4334 23.8466 17.4884V8.03835C23.8583 6.72002 22.8549 5.27335 21.6299 4.80669ZM18.0599 11.34L13.0433 16.3567C12.8683 16.5317 12.6466 16.6134 12.4249 16.6134C12.2033 16.6134 11.9816 16.5317 11.8066 16.3567L9.93994 14.4667C9.6016 14.1284 9.6016 13.5684 9.93994 13.23C10.2783 12.8917 10.8383 12.8917 11.1766 13.23L12.4366 14.49L16.8349 10.0917C17.1733 9.75335 17.7333 9.75335 18.0716 10.0917C18.4099 10.43 18.4099 11.0017 18.0599 11.34Z" fill="#F6F1EE" data-v-28a336b6></path></svg></div><p class="item" data-v-28a336b6> Integrity means telling to our costumers the truth and always keeping our words. We are ready to treating others with <b data-v-28a336b6>respect</b> and <b data-v-28a336b6>fairness</b>. to be sure. Integrity is one of our most cherished assets and It must not be compromised. </p></div></div><div class="card-col f2" data-v-28a336b6><div class="card bg-secondary-2" data-v-28a336b6><div class="w-16 h-16 rounded-full bg-primary-0 p-3 flex items-center justify-center" data-v-28a336b6><svg class="w-full" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-28a336b6><path d="M9.78833 21.5717V9.71839C9.78833 9.25172 9.92833 8.79672 10.185 8.41172L13.37 3.67505C13.8717 2.91672 15.12 2.38005 16.1817 2.77672C17.325 3.16172 18.0833 4.44505 17.8383 5.58839L17.2317 9.40339C17.185 9.75339 17.2783 10.0684 17.4767 10.3134C17.675 10.5351 17.9667 10.6751 18.2817 10.6751H23.0767C23.9983 10.6751 24.7917 11.0484 25.2583 11.7017C25.7017 12.3317 25.7833 13.1484 25.4917 13.9767L22.6217 22.7151C22.26 24.1617 20.685 25.3401 19.1217 25.3401H14.5717C13.79 25.3401 12.6933 25.0717 12.1917 24.5701L10.6983 23.4151C10.1267 22.9834 9.78833 22.2951 9.78833 21.5717Z" fill="#F6F1EE" data-v-28a336b6></path><path d="M6.07831 7.44336H4.87665C3.06831 7.44336 2.33331 8.14336 2.33331 9.87003V21.6067C2.33331 23.3334 3.06831 24.0334 4.87665 24.0334H6.07831C7.88665 24.0334 8.62165 23.3334 8.62165 21.6067V9.87003C8.62165 8.14336 7.88665 7.44336 6.07831 7.44336Z" fill="#F6F1EE" data-v-28a336b6></path></svg></div><p class="item" data-v-28a336b6> The important of <b data-v-28a336b6>commitment</b> is where we will continue to give and <b data-v-28a336b6>serve the best</b> to our customers and investors all the time. </p></div><div class="card bg-primary-3" data-v-28a336b6><div class="w-16 h-16 rounded-full bg-primary-0 p-3 flex items-center justify-center" data-v-28a336b6><svg class="w-full" width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-28a336b6><path d="M14.5 17.5C18.8492 17.5 22.375 14.1049 22.375 9.91671C22.375 5.72855 18.8492 2.33337 14.5 2.33337C10.1508 2.33337 6.625 5.72855 6.625 9.91671C6.625 14.1049 10.1508 17.5 14.5 17.5Z" fill="#F6F1EE" data-v-28a336b6></path><path d="M18.9217 18.2117C19.3067 18.0133 19.75 18.305 19.75 18.7367V24.395C19.75 25.445 19.015 25.9583 18.105 25.5267L14.9783 24.045C14.71 23.9283 14.29 23.9283 14.0217 24.045L10.895 25.5267C9.985 25.9467 9.25 25.4333 9.25 24.3833L9.27333 18.7367C9.27333 18.305 9.72833 18.025 10.1017 18.2117C11.42 18.8767 12.9133 19.25 14.5 19.25C16.0867 19.25 17.5917 18.8767 18.9217 18.2117Z" fill="#F6F1EE" data-v-28a336b6></path></svg></div><p class="item" data-v-28a336b6><b data-v-28a336b6>Quality</b> is shown in many ways by selling and supporting products and services that <b data-v-28a336b6>focus to customers</b>, built good a work environment, delivering financial results that meet <b data-v-28a336b6>investor expectations</b> and maintain and develop process of production that are <b data-v-28a336b6>supervised by experts</b> in order to maintain the product result.</p></div></div></div>', 1),
    Ge = ["src"],
    je = { setup(e) { return (s, o) => (l(), n("div", Ye, [t("div", Fe, [t("div", Ee, [Re, p(L, { title: "Why choose us", class: "relative pl-6 md:max-w-max max-w-full md:whitespace-nowrap", "is-primary": !0 })]), Ve]), t("img", { src: M(Ne), class: "absolute right-0 bottom-0" }, null, 8, Ge)])) } };
var De = m(je, [
        ["__scopeId", "data-v-28a336b6"]
    ]),
    k = "/assets/blog-main.735cde11.png";
const I = function(e) { const s = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; let o = new Date(e); return `${o.getDate()} ${s[o.getMonth()]} ${o.getFullYear()}` },
    P = "https://coffeebeanuniverse.com/",
    Je = { latestPosts: "posts/", postsPage: "posts/page", postsCount: "posts/count", postContent: "posts/post/" },
    Oe = function(e) { return new Promise((s, o) => { F.get(P + e).then(d => { s(d.data) }).catch(d => { o(d) }) }) },
    qe = function(e, s) { return F.post(P + e) };
var w = { BASE_URL: P, routes: Je, get: Oe, post: qe };
const We = {
        components: { SectionTitle: L },
        data() { return { blogs: [], blogMain: k } },
        methods: {
            dateformat(e) { return I(e) },
            retrieveBlog() {
                let e = this;
                w.get(w.routes.latestPosts + 3).then(s => { e.blogs = s })
            }
        },
        mounted() { this.retrieveBlog() }
    },
    Xe = { class: "q-container-fluid f-row mx-auto" },
    Ke = C('<svg class="lg:block hidden" width="259" height="907" viewBox="0 0 259 907" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-0cb9e712><rect x="4.57764e-05" width="259" height="907" fill="white" data-v-0cb9e712></rect><path d="M129.5 0C129.5 71.5209 187.479 129.5 259 129.5L259 1.13212e-05L129.5 0Z" fill="#6A5149" data-v-0cb9e712></path><path opacity="0.8" d="M129.5 518C129.5 446.479 71.5209 388.5 4.94682e-05 388.5L3.8147e-05 518L129.5 518Z" fill="#2C3343" data-v-0cb9e712></path><path fill-rule="evenodd" clip-rule="evenodd" d="M129.5 906.5L129.5 777C201.021 777 259 834.979 259 906.5L129.5 906.5Z" fill="#6A5149" data-v-0cb9e712></path><path opacity="0.8" d="M129.5 647.5C129.5 719.021 187.479 777 259 777L259 647.5L129.5 647.5Z" fill="#222938" data-v-0cb9e712></path><path d="M129.5 777C129.5 848.521 187.479 906.5 259 906.5L259 777L129.5 777Z" fill="#222938" data-v-0cb9e712></path><path opacity="0.8" d="M129.5 5.66062e-06C201.021 8.7869e-06 259 57.9791 259 129.5L4.01157e-05 129.5C4.3242e-05 57.9791 57.9792 2.53435e-06 129.5 5.66062e-06Z" fill="#2C3343" data-v-0cb9e712></path><path d="M129.5 259C129.5 187.479 187.479 129.5 259 129.5L259 388.5C187.479 388.5 129.5 330.521 129.5 259Z" fill="#222938" data-v-0cb9e712></path><path d="M129.5 129.5C201.021 129.5 259 187.479 259 259L4.01157e-05 259C4.3242e-05 187.479 57.9792 129.5 129.5 129.5Z" fill="#91A1AC" data-v-0cb9e712></path><path d="M259 388.5C259 460.021 201.021 518 129.5 518L129.5 259C201.021 259 259 316.979 259 388.5Z" fill="#91A1AC" data-v-0cb9e712></path><path d="M129.5 388.5C129.5 460.021 71.5209 518 2.69486e-05 518L4.95911e-05 259C71.5209 259 129.5 316.979 129.5 388.5Z" fill="#6A5149" data-v-0cb9e712></path><path d="M3.05176e-05 647.5C3.05176e-05 719.021 57.9791 777 129.5 777L129.5 518C57.9791 518 3.05176e-05 575.979 3.05176e-05 647.5Z" fill="#6A5149" data-v-0cb9e712></path><path d="M129.5 647.5C129.5 719.021 187.479 777 259 777L259 518C187.479 518 129.5 575.979 129.5 647.5Z" fill="#222938" data-v-0cb9e712></path><path d="M129.5 777C129.5 848.521 71.5209 906.5 1.16898e-05 906.5L3.43323e-05 647.5C71.5209 647.5 129.5 705.479 129.5 777Z" fill="#91A1AC" data-v-0cb9e712></path></svg>', 1),
    ze = { class: "w-full" },
    ta = { class: "f-row gap-6" },
    ea = { class: "main-blog-card" },
    aa = ["src"],
    oa = { class: "blog-card-details" },
    sa = { class: "blog-card-title" },
    la = { class: "blog-card-description" },
    na = f(" Read More "),
    ia = { class: "blog-card-date" };

function ca(e, s, o, d, a, c) {
    const i = u("SectionTitle"),
        r = u("router-link");
    return l(), n("div", Xe, [Ke, t("div", ze, [p(i, { title: "Blog", class: "pt-6 px-6" }), t("div", ta, [(l(!0), n(_, null, b(a.blogs, v => (l(), n("div", ea, [t("img", { src: v.image_url || a.blogMain, class: "blog-card-image" }, null, 8, aa), t("div", oa, [t("p", sa, h(v.title), 1), t("p", la, h(v.content.length > 120 ? v.content.substring(0, 120) + "..." : v.content), 1), p(r, { to: "/blog/" + v.slug, class: "btn absolute bottom-6" }, { default: Z(() => [na]), _: 2 }, 1032, ["to"]), t("p", ia, h(c.dateformat(v.published_at)), 1)])]))), 256))])])])
}
var ra = m(We, [
    ["render", ca],
    ["__scopeId", "data-v-0cb9e712"]
]);

const AD = { name: "Shop Now!", components: { SectionTitle: L } },
    pa1 = e => (x("data-v-15cb4c32"), e = e(), B(), e),
    ds = t("a", { href: "https://desty.store/coffeebeanuniverse", target: "_blank", rel: "noopener noreferrer", class: "btn-sn text-sn text-black" }, " Shop Now! ", -1),
    ha1 = pa1(() => t("div", { class: "p-container" }, [t("div", { class: "q-container " }, [t("p", { class: "shop-title" }, " Find your taste on coffee! "), t("p", { class: "shop-subtitle mb-4" }, " Get free samples of product for trials! "), ds])], -1));

function ua1(e, s, o, d, a, c) { const i = u("SectionTitle"); return l(), n(_, null, [p(i, { title: "Order Now!", class: "q-container md:justify-center" }), ha1], 64) }
var Sn = m(AD, [
    ["render", ua1]
]);

const da = { name: "HomeWeAreHere", components: { SectionTitle: L } },
    pa = e => (x("data-v-15cb4c32"), e = e(), B(), e),
    ha = pa(() => t("div", { class: "p-container mb-20 md:mb-72" }, [t("div", { class: "q-container" }, [t("p", { class: "location-title" }, " CV. IJEN NUSANTARA "), t("p", { class: "location-subtitle mb-4" }, " Bondowoso, East Java, Indonesia "), t("iframe", { class: "mx-auto md:w-2/3 md:h-96 h-64 w-full", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.510470399943!2d113.96389001477911!3d-7.946082294276517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6cf927d8137a3%3A0xde8d0000ab540ecf!2sPasar%20SUKOSARI%20Ijen!5e0!3m2!1sen!2sid!4v1638807588386!5m2!1sen!2sid", width: "600", height: "450", style: { border: "0" }, allowfullscreen: "", loading: "lazy" })])], -1));

function ua(e, s, o, d, a, c) { const i = u("SectionTitle"); return l(), n(_, null, [p(i, { title: "We Are Here", class: "justify-center", "without-divider": !0 }), ha], 64) }
var va = m(da, [
    ["render", ua],
    ["__scopeId", "data-v-15cb4c32"]
]);

const S = e => (x("data-v-a6caba98"), e = e(), B(), e),
    _a = { class: "f-container", id: "contact-us" },
    ga = { class: "q-container relative" },
    ma = { class: "contact-container" },
    fa = S(() => t("p", null, "Feel free to contact us on your queries and we will get back to you as soon as possible", -1)),
    ba = { class: "contact-items" },
    Ca = ["onClick"],
    Aa = ["src"],
    wa = C('<svg class="md:absolute bottom-0 md:h-auto h-48 md:-right-72 w-full md:w-auto" width="907" height="259" viewBox="0 0 907 259" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6caba98><rect y="259" width="259" height="907" transform="rotate(-90 0 259)" fill="#F6F1EE" data-v-a6caba98></rect><path d="M0 129.5C71.5209 129.5 129.5 71.5209 129.5 2.09194e-05L5.66062e-06 1.52588e-05L0 129.5Z" fill="#6A5149" data-v-a6caba98></path><path opacity="0.8" d="M518 129.5C446.479 129.5 388.5 187.479 388.5 259L518 259L518 129.5Z" fill="#2C3343" data-v-a6caba98></path><path fill-rule="evenodd" clip-rule="evenodd" d="M906.5 129.5L777 129.5C777 57.9791 834.979 2.53435e-06 906.5 5.66062e-06L906.5 129.5Z" fill="#6A5149" data-v-a6caba98></path><path opacity="0.8" d="M647.5 129.5C719.021 129.5 777 71.5209 777 2.09194e-05L647.5 1.52588e-05L647.5 129.5Z" fill="#222938" data-v-a6caba98></path><path d="M777 129.5C848.521 129.5 906.5 71.5209 906.5 2.09194e-05L777 1.52588e-05L777 129.5Z" fill="#222938" data-v-a6caba98></path><path opacity="0.8" d="M0 129.5C0 57.9791 57.9791 3.05176e-05 129.5 3.05176e-05L129.5 259C57.9791 259 0 201.021 0 129.5Z" fill="#2C3343" data-v-a6caba98></path><path d="M259 129.5C187.479 129.5 129.5 71.5209 129.5 2.658e-05L388.5 1.52588e-05C388.5 71.5209 330.521 129.5 259 129.5Z" fill="#222938" data-v-a6caba98></path><path d="M129.5 129.5C129.5 57.9791 187.479 3.05176e-05 259 3.05176e-05V259C187.479 259 129.5 201.021 129.5 129.5Z" fill="#91A1AC" data-v-a6caba98></path><path d="M388.5 5.66062e-06C460.021 8.7869e-06 518 57.9791 518 129.5L259 129.5C259 57.9791 316.979 2.53435e-06 388.5 5.66062e-06Z" fill="#91A1AC" data-v-a6caba98></path><path d="M388.5 129.5C460.021 129.5 518 187.479 518 259L259 259C259 187.479 316.979 129.5 388.5 129.5Z" fill="#6A5149" data-v-a6caba98></path><path d="M647.5 259C719.021 259 777 201.021 777 129.5L518 129.5C518 201.021 575.979 259 647.5 259Z" fill="#6A5149" data-v-a6caba98></path><path d="M647.5 129.5C719.021 129.5 777 71.5209 777 3.93754e-06L518 1.52588e-05C518 71.5209 575.979 129.5 647.5 129.5Z" fill="#222938" data-v-a6caba98></path><path d="M777 129.5C848.521 129.5 906.5 187.479 906.5 259L647.5 259C647.5 187.479 705.479 129.5 777 129.5Z" fill="#91A1AC" data-v-a6caba98></path></svg>', 1),
    ya = { class: "q-container relative mb-40" },
    La = C('<svg class="absolute top-0 h-full" width="907" height="259" viewBox="0 0 907 259" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a6caba98><rect y="259" width="259" height="907" transform="rotate(-90 0 259)" fill="#F6F1EE" data-v-a6caba98></rect><path d="M0 129.5C71.5209 129.5 129.5 71.5209 129.5 2.09194e-05L5.66062e-06 1.52588e-05L0 129.5Z" fill="#6A5149" data-v-a6caba98></path><path opacity="0.8" d="M518 129.5C446.479 129.5 388.5 187.479 388.5 259L518 259L518 129.5Z" fill="#2C3343" data-v-a6caba98></path><path fill-rule="evenodd" clip-rule="evenodd" d="M906.5 129.5L777 129.5C777 57.9791 834.979 2.53435e-06 906.5 5.66062e-06L906.5 129.5Z" fill="#6A5149" data-v-a6caba98></path><path opacity="0.8" d="M647.5 129.5C719.021 129.5 777 71.5209 777 2.09194e-05L647.5 1.52588e-05L647.5 129.5Z" fill="#222938" data-v-a6caba98></path><path d="M777 129.5C848.521 129.5 906.5 71.5209 906.5 2.09194e-05L777 1.52588e-05L777 129.5Z" fill="#222938" data-v-a6caba98></path><path opacity="0.8" d="M0 129.5C0 57.9791 57.9791 3.05176e-05 129.5 3.05176e-05L129.5 259C57.9791 259 0 201.021 0 129.5Z" fill="#2C3343" data-v-a6caba98></path><path d="M259 129.5C187.479 129.5 129.5 71.5209 129.5 2.658e-05L388.5 1.52588e-05C388.5 71.5209 330.521 129.5 259 129.5Z" fill="#222938" data-v-a6caba98></path><path d="M129.5 129.5C129.5 57.9791 187.479 3.05176e-05 259 3.05176e-05V259C187.479 259 129.5 201.021 129.5 129.5Z" fill="#91A1AC" data-v-a6caba98></path><path d="M388.5 5.66062e-06C460.021 8.7869e-06 518 57.9791 518 129.5L259 129.5C259 57.9791 316.979 2.53435e-06 388.5 5.66062e-06Z" fill="#91A1AC" data-v-a6caba98></path><path d="M388.5 129.5C460.021 129.5 518 187.479 518 259L259 259C259 187.479 316.979 129.5 388.5 129.5Z" fill="#6A5149" data-v-a6caba98></path><path d="M647.5 259C719.021 259 777 201.021 777 129.5L518 129.5C518 201.021 575.979 259 647.5 259Z" fill="#6A5149" data-v-a6caba98></path><path d="M647.5 129.5C719.021 129.5 777 71.5209 777 3.93754e-06L518 1.52588e-05C518 71.5209 575.979 129.5 647.5 129.5Z" fill="#222938" data-v-a6caba98></path><path d="M777 129.5C848.521 129.5 906.5 187.479 906.5 259L647.5 259C647.5 187.479 705.479 129.5 777 129.5Z" fill="#91A1AC" data-v-a6caba98></path></svg>', 1),
    Ma = { class: "work-container" },
    xa = S(() => t("p", null, " On your next Coffee export ", -1)),
    Ba = S(() => t("a", { href: "https://wa.me/6285156077857", target: "_blank", rel: "noopener noreferrer", class: "btn text-lg text-white" }, " Get Started ", -1)),
    Za = {
        setup(e) {
            const s = R.footerNavContact;

            function o(d) { window.open(d, "_blank") }
            return (d, a) => (l(), n(_, null, [t("div", _a, [t("div", ga, [p(L, { title: "Contact Us" }), t("div", ma, [fa, t("div", ba, [(l(!0), n(_, null, b(M(s), c => (l(), n("div", { onClick: i => o(c.source), class: "contact-item" }, [t("img", { class: "contact-icon", src: c.image }, null, 8, Aa), t("p", null, h(c.label), 1)], 8, Ca))), 256))])]), wa])]), t("div", ya, [La, t("div", Ma, [p(L, { class: "ld", title: "Let\u2019s work together", "without-divider": !0, "is-small": !0 }), xa, Ba])])], 64))
        }
    };
var Ha = m(Za, [
        ["__scopeId", "data-v-a6caba98"]
    ]),
    T = "/assets/Gallery-1.37c62b27.png",
    Q = "/assets/Gallery-2.b0d5622d.png",
    $ = "/assets/Gallery-3.6d858735.png";
const U = [T, Q, $, T, Q, $, T, Q, $],
    ka = { components: { SectionTitle: L }, data() { return { currentIndex: 1, galleries: U, speed: 2e3, offset: 3 } }, methods: { changeIndex() { this.currentIndex = (this.currentIndex + 1) % U.length } }, computed: { gLength() { return U.length } }, mounted() { setInterval(() => { this.changeIndex() }, this.speed) } },
    Ia = { class: "p-container relative" },
    Pa = C('<div class="icon" data-v-62246d49><svg class="max-w-3xl mx-auto h-full w-full" width="907" height="259" viewBox="0 0 907 259" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-62246d49><path opacity="0.8" d="M907 129.5C835.479 129.5 777.5 187.479 777.5 259L907 259L907 129.5Z" fill="#7A594A" data-v-62246d49></path><path opacity="0.8" d="M389 129.5C460.521 129.5 518.5 71.5209 518.5 2.09194e-05L389 1.52588e-05L389 129.5Z" fill="#2C3343" data-v-62246d49></path><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0.500021 129.5L130 129.5C130 201.021 72.0209 259 0.500015 259L0.500021 129.5Z" fill="#7A594A" data-v-62246d49></path><path opacity="0.8" d="M259.5 129.5C187.979 129.5 130 187.479 130 259L259.5 259L259.5 129.5Z" fill="#202735" data-v-62246d49></path><path opacity="0.8" d="M130 129.5C58.4791 129.5 0.500013 187.479 0.50001 259L130 259L130 129.5Z" fill="#202735" data-v-62246d49></path><path opacity="0.8" d="M907 129.5C907 201.021 849.021 259 777.5 259V0C849.021 0 907 57.9791 907 129.5Z" fill="#2C3343" data-v-62246d49></path><path opacity="0.8" d="M648 129.5C719.521 129.5 777.5 187.479 777.5 259L518.5 259C518.5 187.479 576.479 129.5 648 129.5Z" fill="#202735" data-v-62246d49></path><path opacity="0.8" d="M777.5 129.5C777.5 201.021 719.521 259 648 259V0C719.521 0 777.5 57.9791 777.5 129.5Z" fill="#B5AB9F" data-v-62246d49></path><path opacity="0.8" d="M518.5 259C446.979 259 389 201.021 389 129.5L648 129.5C648 201.021 590.021 259 518.5 259Z" fill="#B5AB9F" data-v-62246d49></path><path opacity="0.8" d="M518.5 129.5C446.979 129.5 389 71.5209 389 3.93754e-06L648 1.52588e-05C648 71.5209 590.021 129.5 518.5 129.5Z" fill="#7A594A" data-v-62246d49></path><path opacity="0.8" d="M259.5 5.66062e-06C187.979 8.7869e-06 130 57.9791 130 129.5L389 129.5C389 57.9791 331.021 2.53435e-06 259.5 5.66062e-06Z" fill="#7A594A" data-v-62246d49></path><path opacity="0.8" d="M259.5 129.5C187.979 129.5 130 187.479 130 259L389 259C389 187.479 331.021 129.5 259.5 129.5Z" fill="#202735" data-v-62246d49></path><path opacity="0.8" d="M130 129.5C58.4791 129.5 0.500033 71.5209 0.500036 3.93754e-06L259.5 1.52588e-05C259.5 71.5209 201.521 129.5 130 129.5Z" fill="#B5AB9F" data-v-62246d49></path></svg></div>', 1),
    Sa = { class: "q-container w-full relative overflow-y-visible" },
    Ta = { class: "gallery-container md:py-20" },
    Qa = { class: "pt-3p relative w-full" },
    $a = ["src"];

function Ua(e, s, o, d, a, c) { const i = u("SectionTitle"); return l(), n(_, null, [p(i, { title: "Gallery", class: "q-container md:justify-center", id: "gallery" }), t("div", Ia, [Pa, t("div", Sa, [t("div", Ta, [(l(!0), n(_, null, b(a.galleries, (r, v) => (l(), n("div", { class: "duration-200 gallery-image", style: K("transform: translateX(" + 100 * (a.currentIndex - a.offset >= v ? c.gLength - a.currentIndex : -a.currentIndex) + "%);") }, [t("div", { class: g("w-full px-3p flex flex-col h-full transform duration-300 transition " + (v === (a.currentIndex + 1) % c.gLength ? "scale-150 pt-parent" : "scale-100")) }, [t("div", Qa, [t("img", { src: r, class: "absolute left-0 top-0 w-full h-full object-cover" }, null, 8, $a)])], 2)], 4))), 256))])])])], 64) }
var Na = m(ka, [
    ["render", Ua],
    ["__scopeId", "data-v-62246d49"]
]);

const Ya = {
    name: "Home",
    components: { HomeGallery: Na, HomeContact: Ha, HomeWeAreHere: va, HomeBlog: ra, HomeWhyChooseUs: De, HomeAbout: Ue, HomeProducts: Ae, HomeBrand: ee, ShopNow: Sn },
    beforeRouteUpdate(e, s, o) {
        let d = e.fullPath;
        if (d.includes("#")) {
            let a = document.getElementById(d.substr(2));
            if (a) {
                let i = a.getBoundingClientRect().top,
                    r = window.scrollY;
                console.log(r), window.scrollTo(0, i + r - 120), o()
            } else o(), this.scrollTo(d)
        }
    }
};

function Fa(e, s, o, d, a, c) {
    const i = u("HomeBrand"),
        r = u("HomeAbout"),
        v = u("HomeProducts"),
        y = u("HomeWhyChooseUs"),
        J = u("HomeGallery"),
        O = u("HomeBlog"),
        q = u("HomeWeAreHere"),
        W = u("HomeContact"),
        X = u("ShopNow");
    return l(), n(_, null, [p(i), p(r), p(v), p(y), p(J), p(O), p(q), p(W), p(X)], 64)
}
var Ea = m(Ya, [
    ["render", Fa]
]);
const Ra = { name: "Pagination", emits: ["pageClick"], props: ["total", "currentPage"], data() { return { current: this.$route.params.pageNumber || 1 } }, watch: { currentPage(e) { this.current = e } }, methods: { gotoPage(e) { e > 0 && e <= this.total && e !== this.current && this.$emit("pageClick", e), this.current = e } }, mounted() { this.current = this.currentPage } },
    N = e => (x("data-v-06279b6d"), e = e(), B(), e),
    Va = { class: "pagination" },
    Ga = N(() => t("div", { class: "divider" }, null, -1)),
    ja = { class: "pagination-items" },
    Da = N(() => t("path", { d: "M15.9631 5.5L8.99996 12.4632L15.9631 19.4263", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)),
    Ja = [Da],
    Oa = { key: 0, class: "disabled" },
    qa = ["onClick"],
    Wa = { key: 5, class: "disabled" },
    Xa = ["onClick"],
    Ka = N(() => t("path", { d: "M8.03687 5.5L15 12.4632L8.03687 19.4263", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, null, -1)),
    za = [Ka];

function t1(e, s, o, d, a, c) { return l(), n("div", Va, [Ga, t("div", ja, [t("a", { onClick: s[0] || (s[0] = i => c.gotoPage(1)), class: g(a.current === 1 ? "disabled" : "") }, "First", 2), (l(), n("svg", { class: g("arrow-paginate " + (a.current === 1 ? "active" : "")), onClick: s[1] || (s[1] = i => c.gotoPage(a.current - 1)), width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, Ja, 2)), a.current > 3 && o.total > 4 || a.current === 3 && o.total === 5 ? (l(), n("a", Oa, "...")) : A("", !0), (a.current < 4 || o.total === 4) && (a.current !== 3 || o.total !== 5) ? (l(!0), n(_, { key: 1 }, b(o.total >= 4 ? 4 : o.total, i => (l(), n("a", { onClick: r => c.gotoPage(i), class: g(a.current === i ? "active" : "") }, h(i), 11, qa))), 256)) : A("", !0), a.current > 3 && o.total - a.current > 2 ? (l(), n("a", { key: 2, onClick: s[2] || (s[2] = i => c.gotoPage(a.current - 1)) }, h(a.current - 1), 1)) : A("", !0), a.current > 3 && o.total - a.current > 2 ? (l(), n("a", { key: 3, onClick: s[3] || (s[3] = i => c.gotoPage(a.current)), class: "active" }, h(a.current), 1)) : A("", !0), a.current > 3 && o.total - a.current > 2 ? (l(), n("a", { key: 4, onClick: s[4] || (s[4] = i => c.gotoPage(a.current + 1)) }, h(a.current + 1), 1)) : A("", !0), o.total - a.current > 2 && o.total > 4 ? (l(), n("a", Wa, "...")) : A("", !0), o.total - a.current < 3 && o.total > 4 ? (l(!0), n(_, { key: 6 }, b(o.total >= 5 ? 4 : 0, i => (l(), n("a", { onClick: r => c.gotoPage(o.total + i - 4), class: g(a.current === o.total + i - 4 ? "active" : "") }, h(o.total + i - 4), 11, Xa))), 256)) : A("", !0), (l(), n("svg", { class: g("arrow-paginate " + (a.current === o.total ? "active" : "")), onClick: s[5] || (s[5] = i => c.gotoPage(a.current + 1)), width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, za, 2)), t("a", { onClick: s[6] || (s[6] = i => c.gotoPage(o.total)), class: g(a.current === o.total ? "disabled" : "") }, "Last", 2)])]) }
var e1 = m(Ra, [
    ["render", t1],
    ["__scopeId", "data-v-06279b6d"]
]);
const a1 = { name: "PatternVertical" },
    o1 = { width: "259", height: "1036", viewBox: "0 0 259 1036", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    s1 = C('<path opacity="0.8" d="M129.5 3.05176e-05C129.5 71.5209 71.5209 129.5 1.52588e-05 129.5V3.05176e-05H129.5Z" fill="#7A594A"></path><path opacity="0.8" d="M129.5 1036C201.021 1036 259 978.021 259 906.5L-5.66062e-06 906.5C-2.53435e-06 978.021 57.9791 1036 129.5 1036Z" fill="#202735"></path><path opacity="0.8" d="M129.5 518C129.5 446.479 187.479 388.5 259 388.5V518H129.5Z" fill="#2C3343"></path><path opacity="0.8" d="M0 906.5C0 978.021 57.9791 1036 129.5 1036V777C57.9791 777 0 834.979 0 906.5Z" fill="#7A594A"></path><path opacity="0.8" d="M129.5 647.5C129.5 719.021 71.5209 777 1.52588e-05 777V647.5H129.5Z" fill="#202735"></path><path opacity="0.8" d="M129.5 777C129.5 848.521 71.5209 906.5 1.52588e-05 906.5V777H129.5Z" fill="#202735"></path><path opacity="0.8" d="M129.5 -5.66062e-06C57.9791 -8.7869e-06 2.79832e-05 57.9791 2.4857e-05 129.5L259 129.5C259 57.9791 201.021 -2.53435e-06 129.5 -5.66062e-06Z" fill="#2C3343"></path><path opacity="0.8" d="M129.5 259C129.5 187.479 71.5209 129.5 3.79013e-05 129.5L1.52588e-05 388.5C71.5209 388.5 129.5 330.521 129.5 259Z" fill="#202735"></path><path opacity="0.8" d="M129.5 129.5C57.9791 129.5 2.79832e-05 187.479 2.4857e-05 259L259 259C259 187.479 201.021 129.5 129.5 129.5Z" fill="#AABCC6"></path><path opacity="0.8" d="M0 388.5C0 460.021 57.9791 518 129.5 518V259C57.9791 259 0 316.979 0 388.5Z" fill="#AABCC6"></path><path opacity="0.8" d="M129.5 388.5C129.5 460.021 187.479 518 259 518V259C187.479 259 129.5 316.979 129.5 388.5Z" fill="#7A594A"></path><path opacity="0.8" d="M259 647.5C259 719.021 201.021 777 129.5 777L129.5 518C201.021 518 259 575.979 259 647.5Z" fill="#7A594A"></path><path opacity="0.8" d="M129.5 647.5C129.5 719.021 71.5209 777 -7.38371e-06 777L1.52588e-05 518C71.5209 518 129.5 575.979 129.5 647.5Z" fill="#202735"></path><path opacity="0.8" d="M129.5 777C129.5 848.521 187.479 906.5 259 906.5V647.5C187.479 647.5 129.5 705.479 129.5 777Z" fill="#AABCC6"></path>', 14),
    l1 = [s1];

function n1(e, s, o, d, a, c) { return l(), n("svg", o1, l1) }
var i1 = m(a1, [
    ["render", n1]
]);
const c1 = {
        name: "Blog",
        components: { Pagination: e1, PatternVertical: i1, SectionTitle: L },
        data() { return { currentPage: this.$route.params.pageNumber || 1, limit: 5, posts: [], maxLength: 150, pageCount: 1, blogImage: k } },
        methods: { getBlogData() { let e = this; return w.get(`${w.routes.postsPage}/${this.currentPage}/${this.limit}`).then(s => { e.posts = s }) }, dateformat(e) { return I(e) }, getPageCount() { return w.get(w.routes.postsCount).then(e => e.total) }, changePage(e) { e === 1 ? (this.currentPage = e, this.$router.push("/blog"), this.getBlogData()) : (this.currentPage = e, this.$router.push(`/blog/page/${e}`), this.getBlogData()) } },
        beforeRouteUpdate(e, s, o) { window.scrollTo(0, 0), o() },
        mounted() {
            let e = this;
            window.scrollTo(0, 0), "pageNumber" in this.$route.params && (this.currentPage = this.$route.params.pageNumber), this.getPageCount().then(s => { e.pageCount = Math.floor((s % e.limit == 0 ? s - 1 : s) / e.limit + 1), e.getBlogData() })
        }
    },
    r1 = e => (x("data-v-0cefc9c2"), e = e(), B(), e),
    d1 = { class: "relative overflow-hidden" },
    p1 = r1(() => t("div", { class: "pattern md:block hidden" }, null, -1)),
    h1 = { class: "bg-blog py-36" },
    u1 = { class: "q-container" },
    v1 = { class: "blog-container" },
    _1 = { class: "blog-card" },
    g1 = ["src"],
    m1 = { class: "blog-card-inner" },
    f1 = { class: "blog-card-title" },
    b1 = { class: "blog-card-excerpt" },
    C1 = f(" Read More "),
    A1 = { class: "blog-date" };

function w1(e, s, o, d, a, c) {
    const i = u("SectionTitle"),
        r = u("router-link"),
        v = u("Pagination");
    return l(), n("div", d1, [p1, t("div", h1, [t("div", u1, [p(i, { title: "Blog" }), t("div", v1, [(l(!0), n(_, null, b(a.posts, y => (l(), n("div", null, [t("div", _1, [t("img", { class: "blog-image", src: y.image_url || a.blogImage }, null, 8, g1), t("div", m1, [t("p", f1, h(y.title), 1), t("p", b1, h(y.content.length > a.maxLength ? y.content.substring(0, a.maxLength) + "..." : y.content), 1), p(r, { class: "blog-card-button btn", to: "/blog/" + y.slug }, { default: Z(() => [C1]), _: 2 }, 1032, ["to"]), t("p", A1, h(c.dateformat(y.published_at)), 1)])])]))), 256))]), p(v, { "current-page": a.currentPage, total: a.pageCount, onPageClick: c.changePage }, null, 8, ["current-page", "total", "onPageClick"])])])])
}
var G = m(c1, [
    ["render", w1],
    ["__scopeId", "data-v-0cefc9c2"]
]);
const y1 = { name: "BlogPage", data() { return { blogImage: null, defaultImage: k, title: "", contents: "", date: "", latestPosts: [], callToAction: "/", callToActionLabel: "" } }, methods: { getContent(e) { let s = this; return w.get(w.routes.postContent + e).then(o => { s.title = o.title, s.contents = o.content, s.date = I(o.published_at), s.blogImage = o.image_url, s.callToAction = o.call_to_action, s.callToActionLabel = o.cta_label }) }, getLatestPosts() { let e = this; return w.get(w.routes.latestPosts + 3).then(s => { e.latestPosts = s }) } }, beforeRouteUpdate(e, s, o) { this.getContent(e.params.slug), this.getLatestPosts().then(d => { window.scrollTo(0, 0), o() }) }, mounted() { this.getContent(this.$route.params.slug), this.getLatestPosts(), window.scrollTo(0, 0) } },
    j = e => (x("data-v-38303aa4"), e = e(), B(), e),
    L1 = { class: "bg-blog min-h-screen" },
    M1 = { class: "q-container pb-32 pt-12 md:py-32 mt-24 mb-0" },
    x1 = { class: "breadcrumbs" },
    B1 = j(() => t("u", null, "Blog", -1)),
    Z1 = f(" > "),
    H1 = { class: "blog-container" },
    k1 = { class: "lg:w-2/3 lg:pr-3" },
    I1 = { class: "blog-page" },
    P1 = { class: "blog-title" },
    S1 = ["src"],
    T1 = { class: "blog-content" },
    Q1 = { class: "blog-date" },
    $1 = { class: "w-full lg:w-1/3 lg:pl-3 lg:pt-0 pt-10" },
    U1 = { class: "blog-latest-posts" },
    N1 = j(() => t("p", { class: "latest-post-display" }, "Latest Posts", -1)),
    Y1 = { key: 0, class: "post-divider" };

function F1(e, s, o, d, a, c) { const i = u("router-link"); return l(), n("div", L1, [t("div", M1, [t("div", x1, [p(i, { to: "/blog/" }, { default: Z(() => [B1]), _: 1 }), Z1, t("p", null, h(a.title), 1)]), t("div", H1, [t("div", k1, [t("div", I1, [t("p", P1, h(a.title), 1), t("img", { src: a.blogImage || a.defaultImage, class: "blog-image" }, null, 8, S1), (l(!0), n(_, null, b(a.contents.split(`
`), r => (l(), n("p", T1, h(r), 1))), 256)), t("p", Q1, h(a.date), 1), a.callToActionLabel ? (l(), Y(i, { key: 0, to: a.callToAction, class: "btn" }, { default: Z(() => [f(h(a.callToActionLabel), 1)]), _: 1 }, 8, ["to"])) : A("", !0)])]), t("div", $1, [t("div", U1, [N1, (l(!0), n(_, null, b(a.latestPosts, (r, v) => (l(), n(_, null, [p(i, { to: "/blog/" + r.slug, class: "latest-post-title" }, { default: Z(() => [f(h(r.title), 1)]), _: 2 }, 1032, ["to"]), v !== a.latestPosts.length - 1 ? (l(), n("span", Y1)) : A("", !0)], 64))), 256))])])])])]) }
var E1 = m(y1, [
    ["render", F1],
    ["__scopeId", "data-v-38303aa4"]
]);
const R1 = [{ path: "/", component: Ea }, { path: "/blog", component: G }, { path: "/blog/page/:pageNumber", component: G }, { path: "/blog/:slug", component: E1 }];
var V1 = z({ routes: R1, history: tt() });
const D = et(Et);
D.use(V1);
D.mount("#app");