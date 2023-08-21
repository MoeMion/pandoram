(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4933],{14009:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/error",function(){return t(75250)}])},75250:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(39324),s=t(35250),i=t(60554),a=t(94968),o=t(32004),u=t(58380),c=t(67273),d=(0,a.vU)({oops:{id:"AuthError.oops",defaultMessage:"Oops!",description:"A short, attention-grabbing message displayed when there is an error during authentication."},goBack:{id:"AuthError.goBack",defaultMessage:"Go back",description:"Text displayed on the button that redirects users back to the authentication page."},systemBusyError:{id:"AuthError.systemBusyError",defaultMessage:"Our systems are a bit busy at the moment, please take a break and try again soon.",description:"An error message displayed when the system is experiencing high load and cannot process the user's authentication request."},identityProviderMismatch:{id:"AuthError.identityProviderMismatch",defaultMessage:"You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method.",description:"An error message displayed when a user tries to sign in with a different authentication method than they initially used to sign up."},accountDeactivated:{id:"AuthError.accountDeactivated",defaultMessage:"You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com.",description:"An error message displayed when a user attempts to sign in with a deleted or deactivated account."},unsupportedCountry:{id:"AuthError.unsupportedCountry",defaultMessage:"OpenAI's services are not available in your country.",description:"An error message displayed when a user is trying to access OpenAI services from a country where they are not available."},unsupportedRegion:{id:"AuthError.unsupportedRegion",defaultMessage:"OpenAI's services are not available in your region.",description:"An error message displayed when a user is trying to access OpenAI services from a region where they are not available."},unknownCountry:{id:"AuthError.unknownCountry",defaultMessage:"We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists.",description:"An error message displayed when the system is unable to determine a user's country of origin to enforce geographical restrictions."},ssoRequired:{id:"AuthError.ssoRequired",defaultMessage:"Please use your organization's SSO to access your account.",description:"An error message displayed when a user needs to use their organization's Single Sign-On (SSO) to access their account."},defaultError:{id:"AuthError.defaultError",defaultMessage:"We ran into an issue while signing you in, please take a break and try again soon.",description:"A generic error message displayed when an unspecified error occurs during authentication."}}),l=(0,s.jsx)(o.Z,(0,n._)({},d.systemBusyError)),h={RequestTimeout:l,AuthRateLimit:l,identity_provider_mismatch:(0,s.jsx)(o.Z,(0,n._)({},d.identityProviderMismatch)),account_deactivated:(0,s.jsx)(o.Z,(0,n._)({},d.accountDeactivated)),unsupported_country:(0,s.jsx)(o.Z,(0,n._)({},d.unsupportedCountry)),unsupported_region:(0,s.jsx)(o.Z,(0,n._)({},d.unsupportedRegion)),unknown_country:(0,s.jsx)(o.Z,(0,n._)({},d.unknownCountry)),sso_required:(0,s.jsx)(o.Z,(0,n._)({},d.ssoRequired)),default:(0,s.jsx)(o.Z,(0,n._)({},d.defaultError))};function p(){return(0,s.jsx)(g,{})}function g(){var e,r=(0,i.useRouter)(),t=null!==(e=h[String(r.query.error)])&&void 0!==e?e:h.default;return(0,s.jsx)(u.Wk,{children:(0,s.jsxs)(u.xh,{children:[(0,s.jsx)(u.jI,{}),(0,s.jsx)("div",{className:"mb-2 text-center text-lg",children:(0,s.jsx)(o.Z,(0,n._)({},d.oops))}),(0,s.jsx)("div",{className:"mb-5 text-center",children:t}),(0,s.jsx)(c.z,{as:"button",color:"neutral",onClick:function(){return r.replace("/auth/login")},children:(0,s.jsx)(o.Z,(0,n._)({},d.goBack))})]})})}},58380:function(e,r,t){"use strict";t.d(r,{VL:function(){return p},Wk:function(){return h},jI:function(){return g},xh:function(){return l}});var n=t(39324),s=t(4337),i=t(35250),a=t(32004),o=t(94968),u=t(21389),c=t(88327);function d(){var e=(0,s._)(["w-96 flex flex-col flex-auto justify-center items-center"]);return d=function(){return e},e}var l=u.Z.div(d());function h(e){var r=e.children,t=e.showTerms;return(0,i.jsxs)("div",{className:"flex h-full w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-800",children:[r,(void 0===t||t)&&(0,i.jsx)(p,{})]})}function p(){return(0,i.jsxs)("div",{className:"py-3 text-xs",children:[(0,i.jsx)("a",{href:"https://openai.com/policies/terms-of-use",target:"_blank",className:"mx-3 text-gray-500",rel:"noreferrer",children:(0,i.jsx)(a.Z,(0,n._)({},y.terms))}),(0,i.jsx)("span",{className:"text-gray-600",children:"|"}),(0,i.jsx)("a",{href:"https://openai.com/policies/privacy-policy",target:"_blank",className:"mx-3 text-gray-500",rel:"noreferrer",children:(0,i.jsx)(a.Z,(0,n._)({},y.privacy))})]})}function g(){return(0,i.jsx)("div",{className:"mb-5",children:(0,i.jsx)(c.nI,{})})}var y=(0,o.vU)({terms:{id:"AutPage.terms",description:"Terms of use link label",defaultMessage:"Terms of use"},privacy:{id:"AutPage.privacy",description:"Privacy policy link label",defaultMessage:"Privacy policy"}})}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=14009)}),_N_E=e.O()}]);