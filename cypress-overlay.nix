final: prev: {
  # This has only been tested against Cypress 7.4.0
  cypress = prev.cypress.overrideAttrs (oldAttrs: {
    version = "10.7.0";
    src = prev.fetchzip {
      url = "https://cdn.cypress.io/desktop/10.7.0/linux-x64/cypress.zip";
      sha256 = "0dwc2fy5zj34wxmwnn8zmfzccqgp25mp7fraawiszyxm5w8cknkp";
    };
    installPhase = let
      matchForChrome = "yield utils_1.default.copyExtension(pathToExtension, extensionDest);";
      appendForChrome = "yield fs_1.fs.chmodAsync(extensionBg, 0o0644);";

      matchForFirefox = "copyExtension(pathToExtension, extensionDest)";
      replaceForFirefox = "copyExtension(pathToExtension, extensionDest).then(() => fs.chmodAsync(extensionBg, 0o0644))";
    in ''
      sed -i '/${matchForChrome}/a\${appendForChrome}' \
          ./resources/app/packages/server/lib/browsers/chrome.js

      sed -i 's/${matchForFirefox}/${replaceForFirefox}/' \
          ./resources/app/packages/server/lib/browsers/utils.js
    '' + oldAttrs.installPhase;
  });
}
