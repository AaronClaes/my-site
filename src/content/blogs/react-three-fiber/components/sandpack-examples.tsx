"use client";
import {
  SandpackCodeEditor,
  type SandpackFiles,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import {
  canvas_file,
  my_mesh_three_texture_loader,
  my_mesh_three_texture_loader_re_render,
  my_mesh_use_loader,
  my_mesh_use_loader_switch_texture,
  my_mesh_use_loader_switch_texture_use_deferred_value,
  my_mesh_use_loader_switch_texture_use_transition,
  my_scene_on_click_react_cube,
  my_scene_on_click_three_cube,
  my_scene_use_loader_on_click,
  my_scene_use_loader_on_click_suspense,
  use_loader_on_click_canvas,
} from "./sandpack-setup";
import { useEffect, useState } from "react";

function SandpackScene({ files }: { files: SandpackFiles }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(() => {
        setIsDarkTheme(document.documentElement.style.colorScheme === "dark");
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SandpackProvider
      files={files}
      theme={isDarkTheme ? "dark" : "light"}
      template="react"
      customSetup={{
        dependencies: {
          "@react-three/fiber": "latest",
          three: "latest",
          "@react-three/drei": "latest",
        },
      }}
    >
      <SandpackLayout>
        <SandpackPreview />
        <SandpackCodeEditor showTabs />
      </SandpackLayout>
    </SandpackProvider>
  );
}

export function SandpackThreeTextureLoader() {
  return (
    <SandpackScene
      files={{
        "/App.js": canvas_file,

        "/my-mesh.js": {
          code: my_mesh_three_texture_loader,
          active: true,
        },
      }}
    />
  );
}

export function SandpackThreeTextureLoaderReRender() {
  return (
    <SandpackScene
      files={{
        "/App.js": canvas_file,

        "/my-mesh.js": {
          code: my_mesh_three_texture_loader_re_render,
          active: true,
        },
      }}
    />
  );
}

export function SandpackUseLoader() {
  return (
    <SandpackScene
      files={{
        "/App.js": canvas_file,

        "/my-mesh.js": {
          code: my_mesh_use_loader,
          active: true,
        },
      }}
    />
  );
}

export function SandpackUseLoaderOnClick() {
  return (
    <SandpackScene
      files={{
        "/App.js": use_loader_on_click_canvas,

        "/my-scene.js": {
          code: my_scene_use_loader_on_click,
          active: true,
        },
        "/react-cube.js": my_scene_on_click_react_cube,
        "/three-cube.js": my_scene_on_click_three_cube,
      }}
    />
  );
}

export function SandpackUseLoaderOnClickSuspense() {
  return (
    <SandpackScene
      files={{
        "/App.js": use_loader_on_click_canvas,

        "/my-scene.js": {
          code: my_scene_use_loader_on_click_suspense,
          active: true,
        },
        "/react-cube.js": my_scene_on_click_react_cube,
        "/three-cube.js": my_scene_on_click_three_cube,
      }}
    />
  );
}

export function SandpackUseLoaderSwitchTexture() {
  return (
    <SandpackScene
      files={{
        "/App.js": canvas_file,
        "/my-mesh.js": my_mesh_use_loader_switch_texture,
      }}
    />
  );
}

export function SandpackUseLoaderSwitchTextureUseTransition() {
  return (
    <SandpackScene
      files={{
        "/App.js": canvas_file,
        "/my-mesh.js": my_mesh_use_loader_switch_texture_use_transition,
      }}
    />
  );
}

export function SandpackUseLoaderSwitchTextureUseDefferedValue() {
  return (
    <SandpackScene
      files={{
        "/App.js": canvas_file,
        "/my-mesh.js": my_mesh_use_loader_switch_texture_use_deferred_value,
      }}
    />
  );
}
