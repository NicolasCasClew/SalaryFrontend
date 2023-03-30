{ pkgs ? import <nixpkgs> { } }:
let unstable = import <pkgs-unstable> { overlays = [ (import ./cypress-overlay.nix) ]; };

    cypress = unstable.callPackage ./cypress.nix {};
in
pkgs.mkShell {
  buildInputs = [
    unstable.nodejs-16_x
    unstable.awscli2
    unstable.sass
  ];
  shellHook = ''
    export CYPRESS_INSTALL_BINARY=0
    export CYPRESS_RUN_BINARY=${unstable.cypress}/bin/Cypress
  '';
}

