export default [
  {
    content:
      "I've always been curious about how things work and how they can be refined. That curiosity led me into tech, where I get to build, learn, and share along the way. I [speak](/talks) at conferences and meetups, and I run [workshops](/workshops) on React, GraphQL, and TypeScript: topics I've been passionate about for years. I enjoy shaping UI systems that are both reliable and flexible, and I like keeping products feeling modern and effortless to use.\n\nIf you’d like to see the gear and apps I use every day, have a look at my [uses page](/uses).\n\nWhen I’m not coding, I’m usually with the people closest to me, playing guitar, or spending time outdoors. I love [diving](https://www.instagram.com/p/DJiPOndzM_8), and I stay active with [cycling, swimming, and running](https://www.strava.com/athletes/14875783).",
    heading: "Hey, I'm Glenn Reyes.",
    lead: 'A software engineer, tech speaker, and workshop instructor based in Vienna.',
    title: 'About',
    _meta: {
      filePath: 'about.mdx',
      fileName: 'about.mdx',
      directory: '.',
      extension: 'mdx',
      path: 'about',
    },
    body: "I've always been curious about how things work and how they can be refined. That curiosity led me into tech, where I get to build, learn, and share along the way. I [speak](/talks) at conferences and meetups, and I run [workshops](/workshops) on React, GraphQL, and TypeScript: topics I've been passionate about for years. I enjoy shaping UI systems that are both reliable and flexible, and I like keeping products feeling modern and effortless to use.\n\nIf you’d like to see the gear and apps I use every day, have a look at my [uses page](/uses).\n\nWhen I’m not coding, I’m usually with the people closest to me, playing guitar, or spending time outdoors. I love [diving](https://www.instagram.com/p/DJiPOndzM_8), and I stay active with [cycling, swimming, and running](https://www.strava.com/athletes/14875783).",
    slug: 'about',
  },
  {
    content:
      '## Company\n\nSoftware Consulting and Development\n\nGlenn Reyes e.U. <br />\nHeribert-Rath-Weg 6/7<br />\n1220 Vienna, Austria\n\nVAT: ATU71727526<br />\nReg. no: FN 552052b<br />\nCourt: Handelsgericht Wien<br />\nMember of the [Vienna Chamber of Commerce](https://wko.at)\n\n## Contact\n\nEmail: glenn@glennreyes.com\n\n## Liability\n\n[Gewerbeordnung](https://ris.bka.gv.at)\n\n## Dispute Resolution\n\nIf you have a complaint or dispute with Glenn Reyes e.U., please contact me by email at [glenn@glennreyes.com]() and I will do my best to resolve the issue.\n\nIf I was unable to resolve the issue, you may submit a complaint to the online dispute resolution platform of the European Commission at http://ec.europa.eu/odr, which provides a single point of entry for consumers and businesses seeking to resolve disputes out of court.',
    title: 'Legal Notice',
    _meta: {
      filePath: 'legal.mdx',
      fileName: 'legal.mdx',
      directory: '.',
      extension: 'mdx',
      path: 'legal',
    },
    body: '## Company\n\nSoftware Consulting and Development\n\nGlenn Reyes e.U. <br />\nHeribert-Rath-Weg 6/7<br />\n1220 Vienna, Austria\n\nVAT: ATU71727526<br />\nReg. no: FN 552052b<br />\nCourt: Handelsgericht Wien<br />\nMember of the [Vienna Chamber of Commerce](https://wko.at)\n\n## Contact\n\nEmail: glenn@glennreyes.com\n\n## Liability\n\n[Gewerbeordnung](https://ris.bka.gv.at)\n\n## Dispute Resolution\n\nIf you have a complaint or dispute with Glenn Reyes e.U., please contact me by email at [glenn@glennreyes.com]() and I will do my best to resolve the issue.\n\nIf I was unable to resolve the issue, you may submit a complaint to the online dispute resolution platform of the European Commission at http://ec.europa.eu/odr, which provides a single point of entry for consumers and businesses seeking to resolve disputes out of court.',
    slug: 'legal',
  },
  {
    content:
      '## MCP Server Information\n\n<DefinitionList>\n  <DefinitionListItem detail="glennreyes.com" term="Server Name" />\n  <DefinitionListItem detail="1.0.0" term="Version" />\n  <DefinitionListItem detail="/mcp" term="API Endpoint" />\n  <DefinitionListItem detail="Model Context Protocol (MCP)" term="Protocol" />\n</DefinitionList>\n\n## Available Tools\n\n<ToolGrid>\n  <ToolGroup id="content" />\n  <ToolGroup id="analytics" />\n</ToolGrid>\n\n<Alert variant="warning">\n  <AlertTitle>Development Note</AlertTitle>\n  <AlertDescription>\n    This MCP server provides programmatic access to portfolio content and\n    analytics. It can be used with Claude and other AI assistants that support\n    the Model Context Protocol for automated content management and analysis.\n  </AlertDescription>\n</Alert>\n\n<H2>Usage Examples</H2>\n\n<H3>Get All Posts</H3>\n\n<p>\n  Try it with Postman (MCP beta) or Claude Desktop&apos;s MCP console to fetch\n  the full list of posts.\n</p>\n\n```bash\nPOST /mcp\n{\n  "method": "tools/call",\n  "params": {\n    "name": "get_all_posts",\n    "arguments": {}\n  }\n}\n```\n\n<H3>Search Content</H3>\n\n<p>\n  Use the same tooling setup to issue a search request and filter by content\n  type.\n</p>\n\n```bash\nPOST /mcp\n{\n  "method": "tools/call",\n  "params": {\n    "name": "search_content",\n    "arguments": {\n      "query": "React",\n      "contentType": "posts"\n    }\n  }\n}\n```\n\n<H3>Get Analytics</H3>\n\n<p>\n  Send this request from Postman or Claude Desktop to pull analytics details for\n  a specific slug.\n</p>\n\n```bash\nPOST /mcp\n{\n  "method": "tools/call",\n  "params": {\n    "name": "get_content_analytics",\n    "arguments": {\n      "contentType": "posts",\n      "slug": "specific-post-slug"\n    }\n  }\n}\n```',
    _meta: {
      filePath: 'mcp.mdx',
      fileName: 'mcp.mdx',
      directory: '.',
      extension: 'mdx',
      path: 'mcp',
    },
    body: '## MCP Server Information\n\n<DefinitionList>\n  <DefinitionListItem detail="glennreyes.com" term="Server Name" />\n  <DefinitionListItem detail="1.0.0" term="Version" />\n  <DefinitionListItem detail="/mcp" term="API Endpoint" />\n  <DefinitionListItem detail="Model Context Protocol (MCP)" term="Protocol" />\n</DefinitionList>\n\n## Available Tools\n\n<ToolGrid>\n  <ToolGroup id="content" />\n  <ToolGroup id="analytics" />\n</ToolGrid>\n\n<Alert variant="warning">\n  <AlertTitle>Development Note</AlertTitle>\n  <AlertDescription>\n    This MCP server provides programmatic access to portfolio content and\n    analytics. It can be used with Claude and other AI assistants that support\n    the Model Context Protocol for automated content management and analysis.\n  </AlertDescription>\n</Alert>\n\n<H2>Usage Examples</H2>\n\n<H3>Get All Posts</H3>\n\n<p>\n  Try it with Postman (MCP beta) or Claude Desktop&apos;s MCP console to fetch\n  the full list of posts.\n</p>\n\n```bash\nPOST /mcp\n{\n  "method": "tools/call",\n  "params": {\n    "name": "get_all_posts",\n    "arguments": {}\n  }\n}\n```\n\n<H3>Search Content</H3>\n\n<p>\n  Use the same tooling setup to issue a search request and filter by content\n  type.\n</p>\n\n```bash\nPOST /mcp\n{\n  "method": "tools/call",\n  "params": {\n    "name": "search_content",\n    "arguments": {\n      "query": "React",\n      "contentType": "posts"\n    }\n  }\n}\n```\n\n<H3>Get Analytics</H3>\n\n<p>\n  Send this request from Postman or Claude Desktop to pull analytics details for\n  a specific slug.\n</p>\n\n```bash\nPOST /mcp\n{\n  "method": "tools/call",\n  "params": {\n    "name": "get_content_analytics",\n    "arguments": {\n      "contentType": "posts",\n      "slug": "specific-post-slug"\n    }\n  }\n}\n```',
    slug: 'mcp',
  },
  {
    content:
      "While I work on creating new content to share, please feel free to head back to the [homepage](/) where you can discover more about my experiences, interests, and the projects that I've passionately worked on.",
    heading: 'Page not found.',
    lead: "Oh no! It seems the page you're looking for doesn't exist here on my personal website.",
    title: '404: This page could not be found',
    _meta: {
      filePath: 'not-found.mdx',
      fileName: 'not-found.mdx',
      directory: '.',
      extension: 'mdx',
      path: 'not-found',
    },
    body: "While I work on creating new content to share, please feel free to head back to the [homepage](/) where you can discover more about my experiences, interests, and the projects that I've passionately worked on.",
    slug: 'not-found',
  },
  {
    content:
      'I am committed to protecting your privacy. This Privacy Policy explains how I collect, use, and disclose information about you when you visit my website at [glennreyes.com](/) (the "Website").\n\n## Information Collection\n\nI do not collect any personal information about you on my Website. However, I do collect anonymous data such as the type of device, operating system and browser used, location and other technical information through [Vercel Analytics](https://vercel.com/analytics), which helps me understand how visitors use my Website and improve its performance.\n\n## External Content\n\nMy articles may include content from external sources, such as text, code snippets, images, links, etc. While I make every effort to only include content from reputable sources, I cannot be held responsible for the privacy practices or content of external websites.\n\n## Discussions\n\nDiscussions related to my articles are managed via [giscus](https://giscus.app) and hosted on GitHub as [GitHub Discussions](https://github.com/features/discussions). By participating in a discussion, you agree that your comments and any personal information you provide in connection with your comments can be publicly displayed on my website. Please note that GitHub is a third-party service and [their privacy policy](https://docs.github.com/privacy) applies to the information collected by and submitted to GitHub Discussions. I am not responsible for any issues that may arise from the use of the discussions feature.\n\n## Cookies\n\nMy Website does not use cookies to collect personal information about you.\n\n## Updates\n\nI may update this Privacy Policy from time to time. Any updates will be reflected on this Privacy Policy page. Please check this page periodically for updates. By continuing to use my Website after any updates are made, you agree to the revised Privacy Policy.\n\n## Contact\n\nIf you have any questions about this Privacy Policy, please contact me at glenn@glennreyes.com.',
    lead: 'Last updated on April 4, 2023',
    title: 'Privacy Policy',
    _meta: {
      filePath: 'privacy.mdx',
      fileName: 'privacy.mdx',
      directory: '.',
      extension: 'mdx',
      path: 'privacy',
    },
    body: 'I am committed to protecting your privacy. This Privacy Policy explains how I collect, use, and disclose information about you when you visit my website at [glennreyes.com](/) (the "Website").\n\n## Information Collection\n\nI do not collect any personal information about you on my Website. However, I do collect anonymous data such as the type of device, operating system and browser used, location and other technical information through [Vercel Analytics](https://vercel.com/analytics), which helps me understand how visitors use my Website and improve its performance.\n\n## External Content\n\nMy articles may include content from external sources, such as text, code snippets, images, links, etc. While I make every effort to only include content from reputable sources, I cannot be held responsible for the privacy practices or content of external websites.\n\n## Discussions\n\nDiscussions related to my articles are managed via [giscus](https://giscus.app) and hosted on GitHub as [GitHub Discussions](https://github.com/features/discussions). By participating in a discussion, you agree that your comments and any personal information you provide in connection with your comments can be publicly displayed on my website. Please note that GitHub is a third-party service and [their privacy policy](https://docs.github.com/privacy) applies to the information collected by and submitted to GitHub Discussions. I am not responsible for any issues that may arise from the use of the discussions feature.\n\n## Cookies\n\nMy Website does not use cookies to collect personal information about you.\n\n## Updates\n\nI may update this Privacy Policy from time to time. Any updates will be reflected on this Privacy Policy page. Please check this page periodically for updates. By continuing to use my Website after any updates are made, you agree to the revised Privacy Policy.\n\n## Contact\n\nIf you have any questions about this Privacy Policy, please contact me at glenn@glennreyes.com.',
    slug: 'privacy',
  },
  {
    content:
      "Thanks for subscribing to my newsletter! Please check your inbox to confirm your subscription. Once you've confirmed, you'll receive occasional updates on my work and projects.\n\nNo spam, unsubscribe at any time.",
    heading: 'Check your inbox to confirm.',
    title: 'Check your inbox',
    _meta: {
      filePath: 'subscribe/confirm.mdx',
      fileName: 'confirm.mdx',
      directory: 'subscribe',
      extension: 'mdx',
      path: 'subscribe/confirm',
    },
    body: "Thanks for subscribing to my newsletter! Please check your inbox to confirm your subscription. Once you've confirmed, you'll receive occasional updates on my work and projects.\n\nNo spam, unsubscribe at any time.",
    slug: 'subscribe/confirm',
  },
  {
    content:
      "Welcome to my newsletter! You'll be the first to know about my latest work and upcoming projects. Keep an eye on your inbox for some great content.",
    heading: 'Thanks for subscribing.',
    title: "You're subscribed!",
    _meta: {
      filePath: 'subscribe/thank-you.mdx',
      fileName: 'thank-you.mdx',
      directory: 'subscribe',
      extension: 'mdx',
      path: 'subscribe/thank-you',
    },
    body: "Welcome to my newsletter! You'll be the first to know about my latest work and upcoming projects. Keep an eye on your inbox for some great content.",
    slug: 'subscribe/thank-you',
  },
  {
    content:
      '## Workstation\n\n- 16" MacBook Pro M1 Max\n- LG 27UD88-W 27" 4K monitor\n- Apple Magic Keyboard\n- Apple Magic Trackpad\n- CalDigit Thunderbolt 4 dock\n\n## Office\n\n- Ergotopia® Desktopia Pro X desk\n- Hermann Miller Aeron chair\n\n## Coding\n\n- Cursor editor with AI assistant\n- GitHub Dark theme\n- SF Mono font\n- Zsh terminal\n\n## Software\n\n- ChatGPT\n- Spotify\n- 1Password\n- Notion\n- Figma\n\n## Video\n\n- Opal C1 4K webcam\n- Sony Alpha 7 IV camera & 35mm/f1.8 lens\n- Rollei Compact Traveler No. 1 tripod\n- Elgato Cam Link 4K capture card\n- Elgato Key Light (2x)\n- Davinci Resolve\n\n## Audio\n\n- Apollo Twin X Duo audio interface\n- Shure SM7B microphone\n- Cloudlifter CL-1 microphone preamp\n- Rode PSA1 boom arm\n- Yamaha HS8 studio monitors (2x)\n- Audio Technica ATH-M50x headphones\n\nCheck out my complete music setup on [equipboard.com](https://equipboard.com/glennreyes).\n\n## Tech Accessories\n\n- Apple iPhone Pro Max\n- AirPods Pro\n- Apple Watch Ultra\n- Apple iPad Pro\n- Nomatic Travel Pack backpack\n- Nomatic Wallet\n\n## Music\n\n- Martin OMJM acoustic guitar\n- Fender Stratocaster 60s electric guitar\n- Epiphone Sheraton II electric guitar\n- Komplete Kontrol S61 keyboard\n- Logic Pro X\n\n## Sports\n\n- Spezialized Tarmac SL6 road bike\n- Roval CL50 carbon wheels\n- Shimano Ultegra R8000 groupset\n- Garmin Edge 830 GPS cycling computer\n- Garmin Rally RS200 power meter pedals\n- Speedo Vanquisher 2.0 goggles\n- Brooks Adrenaline GTS 22 running shoes\n- On Cloudstratus running shoes\n\n## Diving\n\n- Leaderfins Full Carbon Bi-Fins\n- Trudive 2mm Super Elastic reversible wetsuit\n- Octopus carbon nose clip\n- Arena Airspeed mirror goggles\n- Cressi Calibro mirror mask\n- Cressi Corsica snorkel',
    heading: 'Uses.',
    lead: 'I have found that the right technology can make all the difference in my coding, video production, and music creation pursuits, which is why I have curated a list of essential tech that helps me achieve my goals.',
    title: 'Uses',
    _meta: {
      filePath: 'uses.mdx',
      fileName: 'uses.mdx',
      directory: '.',
      extension: 'mdx',
      path: 'uses',
    },
    body: '## Workstation\n\n- 16" MacBook Pro M1 Max\n- LG 27UD88-W 27" 4K monitor\n- Apple Magic Keyboard\n- Apple Magic Trackpad\n- CalDigit Thunderbolt 4 dock\n\n## Office\n\n- Ergotopia® Desktopia Pro X desk\n- Hermann Miller Aeron chair\n\n## Coding\n\n- Cursor editor with AI assistant\n- GitHub Dark theme\n- SF Mono font\n- Zsh terminal\n\n## Software\n\n- ChatGPT\n- Spotify\n- 1Password\n- Notion\n- Figma\n\n## Video\n\n- Opal C1 4K webcam\n- Sony Alpha 7 IV camera & 35mm/f1.8 lens\n- Rollei Compact Traveler No. 1 tripod\n- Elgato Cam Link 4K capture card\n- Elgato Key Light (2x)\n- Davinci Resolve\n\n## Audio\n\n- Apollo Twin X Duo audio interface\n- Shure SM7B microphone\n- Cloudlifter CL-1 microphone preamp\n- Rode PSA1 boom arm\n- Yamaha HS8 studio monitors (2x)\n- Audio Technica ATH-M50x headphones\n\nCheck out my complete music setup on [equipboard.com](https://equipboard.com/glennreyes).\n\n## Tech Accessories\n\n- Apple iPhone Pro Max\n- AirPods Pro\n- Apple Watch Ultra\n- Apple iPad Pro\n- Nomatic Travel Pack backpack\n- Nomatic Wallet\n\n## Music\n\n- Martin OMJM acoustic guitar\n- Fender Stratocaster 60s electric guitar\n- Epiphone Sheraton II electric guitar\n- Komplete Kontrol S61 keyboard\n- Logic Pro X\n\n## Sports\n\n- Spezialized Tarmac SL6 road bike\n- Roval CL50 carbon wheels\n- Shimano Ultegra R8000 groupset\n- Garmin Edge 830 GPS cycling computer\n- Garmin Rally RS200 power meter pedals\n- Speedo Vanquisher 2.0 goggles\n- Brooks Adrenaline GTS 22 running shoes\n- On Cloudstratus running shoes\n\n## Diving\n\n- Leaderfins Full Carbon Bi-Fins\n- Trudive 2mm Super Elastic reversible wetsuit\n- Octopus carbon nose clip\n- Arena Airspeed mirror goggles\n- Cressi Calibro mirror mask\n- Cressi Corsica snorkel',
    slug: 'uses',
  },
];
