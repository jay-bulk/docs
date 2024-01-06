"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[62558],{58058:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(85893),r=t(11151);const a={},i="Deploy a PostgreSQL database with Neon",s={id:"platformatic-cloud/deploy-database-neon",title:"Deploy a PostgreSQL database with Neon",description:"Neon offers multi-cloud fully managed",source:"@site/versioned_docs/version-1.14.3/platformatic-cloud/deploy-database-neon.md",sourceDirName:"platformatic-cloud",slug:"/platformatic-cloud/deploy-database-neon",permalink:"/docs/1.14.3/platformatic-cloud/deploy-database-neon",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.14.3/platformatic-cloud/deploy-database-neon.md",tags:[],version:"1.14.3",frontMatter:{},sidebar:"docs",previous:{title:"Cloud Quick Start Guide",permalink:"/docs/1.14.3/platformatic-cloud/quick-start-guide"},next:{title:"Platformatic Risk Engine",permalink:"/docs/1.14.3/platformatic-cloud/risk-engine"}},c={},l=[{value:"Create a project on Neon",id:"create-a-project-on-neon",level:2},{value:"Configure Github Environments and Secrets",id:"configure-github-environments-and-secrets",level:2},{value:"Configure the main branch workflow",id:"configure-the-main-branch-workflow",level:2},{value:"Configure the preview environment workflow",id:"configure-the-preview-environment-workflow",level:2},{value:"GitHub Action to create a preview environment",id:"github-action-to-create-a-preview-environment",level:3},{value:"Configure preview environment cleanup",id:"configure-preview-environment-cleanup",level:3},{value:"Deployment",id:"deployment",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"deploy-a-postgresql-database-with-neon",children:"Deploy a PostgreSQL database with Neon"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://neon.tech/",children:"Neon"})," offers multi-cloud fully managed\nPostgres with a generous free tier. They separated storage and\ncompute to offer autoscaling, branching, and bottomless storage.\nIt offers a great environment for creating database preview\nenvironments for your ",(0,o.jsx)(n.a,{href:"https://oss.platformatic.dev/docs/reference/db/introduction",children:"Platformatic DB"}),"\napplications."]}),"\n",(0,o.jsxs)(n.p,{children:["This guide shows you how to integrate Neon branch deployments with your\nPlatformatic app's GitHub Actions workflows. It assumes you have already\nfollowed the ",(0,o.jsx)(n.a,{href:"/docs/quick-start-guide",children:"Quick Start Guide"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-project-on-neon",children:"Create a project on Neon"}),"\n",(0,o.jsxs)(n.p,{children:["To set up an account with Neon, ",(0,o.jsx)(n.a,{href:"https://neon.tech",children:"open their website"}),", sign up and create a\nnew project."]}),"\n",(0,o.jsx)(n.p,{children:"Take note of the following configuration setting values:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The connection string for your ",(0,o.jsx)(n.code,{children:"main"})," branch database, to be stored in a ",(0,o.jsx)(n.code,{children:"NEON_DB_URL_PRODUCTION"})," secret"]}),"\n",(0,o.jsxs)(n.li,{children:["The Project ID (available under the project ",(0,o.jsx)(n.strong,{children:"Settings"}),"), to be stored in a ",(0,o.jsx)(n.code,{children:"NEON_PROJECT_ID"})," secret"]}),"\n",(0,o.jsxs)(n.li,{children:["Your API key (available by clicking on your user icon > ",(0,o.jsx)(n.strong,{children:"Account > Developer settings"}),"), to be stored under ",(0,o.jsx)(n.code,{children:"NEON_API_KEY"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can learn more about Neon API keys in their ",(0,o.jsx)(n.a,{href:"https://neon.tech/docs/manage/api-keys",children:"Manage API Keys"})," documentation."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-github-environments-and-secrets",children:"Configure Github Environments and Secrets"}),"\n",(0,o.jsxs)(n.p,{children:["Now you need to set the configuration values listed above as\n",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/actions/security-guides/encrypted-secrets",children:"repository secrets"}),"\non your project's GitHub repository.\nLearn how to use environments for deployment ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment",children:"in GitHub's documentation"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Configure the GitHub Environments for your repository to have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"production"})," secrets, available only to the ",(0,o.jsx)(n.code,{children:"main"})," branch:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"NEON_DB_URL_PRODUCTION"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"previews"})," secrets available to all branches:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"NEON_PROJECT_ID"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"NEON_API_KEY"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-main-branch-workflow",children:"Configure the main branch workflow"}),"\n",(0,o.jsx)(n.p,{children:"Replace the contents of your app's workflow for static workspace deployment:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/platformatic-static-workspace-deploy.yml"',children:"name: Deploy Platformatic application to the cloud\non:\n  push:\n    branches:\n      - main\n    paths-ignore:\n      - 'docs/**'\n      - '**.md'\n\njobs:\n  build_and_deploy:\n    environment:\n      name: production\n    permissions:\n      contents: read\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout application project repository\n        uses: actions/checkout@v4\n      - name: npm install --omit=dev\n        run: npm install --omit=dev\n      - name: Deploy project\n        uses: platformatic/onestep@latest\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          platformatic_workspace_id: <YOUR_STATIC_WORKSPACE_ID>\n          platformatic_workspace_key: ${{ secrets.PLATFORMATIC_STATIC_WORKSPACE_API_KEY }}\n          platformatic_config_path: ./platformatic.db.json\n          secrets: DATABASE_URL\n        env:\n          DATABASE_URL: ${{ secrets.NEON_DB_URL_PRODUCTION }}\n          PLT_SERVER_LOGGER_LEVEL: info \n          PORT: 3042 \n          PLT_SERVER_HOSTNAME: 127.0.0.1\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<YOUR_STATIC_WORKSPACE_ID>"})," with the workspace ID that you previously had in this file."]}),"\n",(0,o.jsxs)(n.p,{children:["When your app is deployed to the static workspace it will now be configured to connect to the\n",(0,o.jsx)(n.code,{children:"main"})," branch database for your Neon project."]}),"\n",(0,o.jsx)(n.h2,{id:"configure-the-preview-environment-workflow",children:"Configure the preview environment workflow"}),"\n",(0,o.jsx)(n.p,{children:"Neon allows up to 10 database branches on their free tier. You can automatically create a new\ndatabase branch when a pull request is opened, and then automatically remove it when the pull\nrequest is merged."}),"\n",(0,o.jsx)(n.h3,{id:"github-action-to-create-a-preview-environment",children:"GitHub Action to create a preview environment"}),"\n",(0,o.jsx)(n.p,{children:"Replace the contents of your app's workflow for dynamic workspace deployment:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/platformatic-dynamic-workspace-deploy.yml"',children:'name: Deploy to Platformatic cloud\non:\n  pull_request:\n    paths-ignore:\n      - \'docs/**\'\n      - \'**.md\'\n\n# This allows a subsequently queued workflow run to interrupt previous runs\nconcurrency:\n  group: "${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}"\n  cancel-in-progress: true\n\njobs:\n  build_and_deploy:\n    runs-on: ubuntu-latest\n    environment: \n      name: development\n    steps:\n      - name: Checkout application project repository\n        uses: actions/checkout@v4\n      - name: npm install --omit=dev\n        run: npm install --omit=dev\n      - name: Get PR number\n        id: get_pull_number\n        run: |\n          pull_number=$(jq --raw-output .pull_request.number "$GITHUB_EVENT_PATH")\n          echo "pull_number=${pull_number}" >> $GITHUB_OUTPUT\n          echo $pull_number\n      - uses: neondatabase/create-branch-action@v4\n        with:\n          project_id: ${{ secrets.NEON_PROJECT_ID }}\n          branch_name: pr-${{ steps.get_pull_number.outputs.pull_number }}\n          api_key: ${{ secrets.NEON_API_KEY }}\n        id: create-branch\n      - name: Deploy project\n        uses: platformatic/onestep@latest\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          platformatic_workspace_id: ${{ secrets.PLATFORMATIC_DYNAMIC_WORKSPACE_ID }}\n          platformatic_workspace_key: ${{ secrets.PLATFORMATIC_DYNAMIC_WORKSPACE_KEY }}\n          platformatic_config_path: ./platformatic.db.json\n        env:\n          DATABASE_URL: ${{ steps.create-branch.outputs.db_url }}\n          PLT_SERVER_LOGGER_LEVEL: info \n          PORT: 3042 \n          PLT_SERVER_HOSTNAME: 127.0.0.1\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Replace ",(0,o.jsx)(n.code,{children:"<YOUR_DYNAMIC_WORKSPACE_ID>"})," with the workspace ID that you previously had in this file."]}),"\n",(0,o.jsx)(n.h3,{id:"configure-preview-environment-cleanup",children:"Configure preview environment cleanup"}),"\n",(0,o.jsxs)(n.p,{children:["After a pull request to the ",(0,o.jsx)(n.code,{children:"main"})," branch is merged, you should remove the matching database branch."]}),"\n",(0,o.jsxs)(n.p,{children:["Create a new file, ",(0,o.jsx)(n.code,{children:".github/workflows/cleanup-neon-branch-db.yml"}),", and copy and paste in the following\nworkflow configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",metastring:'title=".github/workflows/cleanup-neon-branch-db.yml"',children:"name: Cleanup Neon Database Branch\non:\n  push:\n    branches:\n      - 'main'\njobs:\n  delete-branch:\n    environment: \n      name: development\n    permissions: write-all\n    runs-on: ubuntu-latest\n    steps:\n      - name: Get PR info\n        id: get-pr-info\n        uses: actions-ecosystem/action-get-merged-pull-request@v1.0.1\n        with:\n          github_token: ${{secrets.GITHUB_TOKEN}}\n      - run: |\n          echo ${{ steps.get-pr-info.outputs.number}}\n      - name: Delete Neon Branch\n        if: ${{ steps.get-pr-info.outputs.number }}\n        uses: neondatabase/delete-branch-action@v3\n        with:\n          project_id: ${{ secrets.NEON_PROJECT_ID }}\n          branch: pr-${{ steps.get-pr-info.outputs.number }}\n          api_key: ${{ secrets.NEON_API_KEY }}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsx)(n.p,{children:"To deploy these changes to your app:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create a Git branch locally (",(0,o.jsx)(n.code,{children:"git checkout -b <BRANCH_NAME>"}),")"]}),"\n",(0,o.jsx)(n.li,{children:"Commit your changes and push them to GitHub"}),"\n",(0,o.jsx)(n.li,{children:"Open a pull request on GitHub - a branch will automatically be created for your Neon database and a preview app will be deployed to Platformatic Cloud (in your app's dynamic workspace)."}),"\n",(0,o.jsx)(n.li,{children:"Merge the pull request - the Neon databsase branch will be automatically deleted and your app will be deployed to Platformatic Cloud (in your app's static workspace)."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var o=t(67294);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);