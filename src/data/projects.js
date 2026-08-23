import baseMobilityGif from '../assets/projects/01-base-mobility.gif';
import jumpingGif from '../assets/projects/02-jumping.gif';
import crouchingProningGif from '../assets/projects/03-crouching-proning.gif';
import slidingGif from '../assets/projects/04-sliding.gif';
import rollingGif from '../assets/projects/05-rolling.gif';
import ledgeWalkingGif from '../assets/projects/06-ledge-walking.gif';
import glidingGif from '../assets/projects/07-gliding.gif';
import ladderClimbingGif from '../assets/projects/08-ladder-climbing.gif';
import interactableSystemGif from '../assets/projects/09-interactable-system.gif';
import dialogueSystemGif from '../assets/projects/10-dialogue-system.gif';
import triggerPuzzleSystemGif from '../assets/projects/11-trigger-puzzle-system.gif';
import saveSystemGif from '../assets/projects/12-save-system.gif';
import textTranslationSystemGif from '../assets/projects/13-text-translation-system.gif';
import fpControllerInteractablesGif from '../assets/projects/14-fp-controller-interactables.gif';
import audioManagerGif from '../assets/projects/15-audio-manager.gif';
import fpFlashlightGif from '../assets/projects/16-fp-flashlight.gif';
import multifloorElevatorGif from '../assets/projects/17-multifloor-elevator.gif';
import assetGridVisualizerGif from '../assets/projects/18-asset-grid-visualizer.gif';
import radioStationManagerGif from '../assets/projects/19-radio-station-manager.gif';
import objectPlacingSystemGif from '../assets/projects/20-object-placing-system.gif';
import droppablesSystemGif from '../assets/projects/21-droppables-system.gif';
import destructiblesSystemGif from '../assets/projects/22-destructibles-system.gif';

const SHOWCASE_BASE =
  'https://github.com/LukkasVN/LVN-Gameplay-Programming-Showcase/tree/main';

export const projects = {
  en: [
    {
      id: 'showcase-22',
      title: '22 \u00b7 Modular Destructibles System',
      date: 'May 2026',
      description:
        'Data-driven destructible objects with damage, visual feedback, optional debris spawning, and respawn support.',
      mediaTag: 'GIF',
      media: destructiblesSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/22_Modular_Destructibles_System` }],
    },
    {
      id: 'showcase-21',
      title: '21 \u00b7 Modular Droppables System',
      date: 'Apr 2026',
      description:
        'A fully data-driven item drop system with physics-based scatter, smooth float behaviour, and trigger-based collection.',
      mediaTag: 'GIF',
      media: droppablesSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/21_Modular_Droppables_System` }],
    },
    {
      id: 'showcase-20',
      title: '20 \u00b7 Serializable Object Placing System',
      date: 'Mar 2026',
      description:
        'A first-person object placement system with full save integration, letting players place, edit, reposition, and remove objects at runtime, persisted across sessions.',
      mediaTag: 'GIF',
      media: objectPlacingSystemGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/20_Serializable_Object_Placing_System` },
      ],
    },
    {
      id: 'showcase-19',
      title: '19 \u00b7 Radio Station Manager System',
      date: 'Mar 2026',
      description:
        'A persistent, synchronized in-game radio broadcast: every radio tuned to the same station plays identical content, and resumes where it left off if turned back on in time.',
      mediaTag: 'GIF',
      media: radioStationManagerGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/19_Radio_Station_Manager_System` }],
    },
    {
      id: 'showcase-18',
      title: '18 \u00b7 Asset Grid Visualizer (Tool)',
      date: 'Mar 2026',
      description:
        'A data-driven editor grid tool for organizing and previewing game assets in a structured layout, without cluttering the main scene.',
      mediaTag: 'GIF',
      media: assetGridVisualizerGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/18_TOOL_AssetVisualizer` }],
    },
    {
      id: 'showcase-17',
      title: '17 \u00b7 Multi-Floor Elevator System',
      date: 'Mar 2026',
      description:
        'A state-machine-driven elevator handling multiple floors and automated logic, taking direct control of the player during transit to prevent platform jitter and phasing.',
      mediaTag: 'GIF',
      media: multifloorElevatorGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/17_MultiFloor_Elevator_System` }],
    },
    {
      id: 'showcase-16',
      title: '16 \u00b7 First-Person Flashlight System',
      date: 'Feb 2026',
      description:
        'A modular flashlight mechanic featuring battery simulation, flicker behaviour, inertia-based lag, and designer-friendly configuration.',
      mediaTag: 'GIF',
      media: fpFlashlightGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/16_FP_Flashlight_System` }],
    },
    {
      id: 'showcase-15',
      title: '15 \u00b7 Audio Manager System',
      date: 'Feb 2026',
      description:
        'A unified audio workflow handling music, SFX, UI sounds, 3D positional audio, and mixer-based volume control.',
      mediaTag: 'GIF',
      media: audioManagerGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/15_AudioManager_System` }],
    },
    {
      id: 'showcase-14',
      title: '14 \u00b7 First-Person Controller & Interactables',
      date: 'Feb 2026',
      description:
        'A unified first-person controller and interaction workflow, with the character exposing explicit ability toggles and interactables sharing a minimal interface.',
      mediaTag: 'GIF',
      media: fpControllerInteractablesGif,
      links: [
        {
          label: 'Repo',
          href: `${SHOWCASE_BASE}/14_FirstPersonController_&_FPInteractable_Systems`,
        },
      ],
    },
    {
      id: 'showcase-13',
      title: '13 \u00b7 Modular Static Text Translation System',
      date: 'Feb 2026',
      description:
        'A simple approach to static text localization where each text element stores its own localized strings, and a central manager broadcasts language changes.',
      mediaTag: 'GIF',
      media: textTranslationSystemGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/13_Modular_Static_Text_Translation_System` },
      ],
    },
    {
      id: 'showcase-12',
      title: '12 \u00b7 Modular Save System',
      date: 'Jan 2026',
      description:
        'A component-driven save and load architecture where any gameplay behaviour can define its own save data through a stable GUID system.',
      mediaTag: 'GIF',
      media: saveSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/12_Modular_Save_System` }],
    },
    {
      id: 'showcase-11',
      title: '11 \u00b7 Modular Trigger-Based Puzzle System',
      date: 'Jan 2026',
      description:
        'An event-driven puzzle architecture built around trigger volumes and tag validation, assembled without hard-wiring dependencies between triggers.',
      mediaTag: 'GIF',
      media: triggerPuzzleSystemGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/11_Modular_TriggerBased_Puzzle_System` },
      ],
    },
    {
      id: 'showcase-10',
      title: '10 \u00b7 Simple Modular Dialogue System',
      date: 'Jan 2026',
      description:
        'A lightweight, non-branching dialogue architecture across Unity C#, Unreal C++, and Unreal Blueprints, supporting Locked, Base, and Used dialogue types.',
      mediaTag: 'GIF',
      media: dialogueSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/10_Simple_Modular_Dialogue_System` }],
    },
    {
      id: 'showcase-09',
      title: '09 \u00b7 Modular Interactable System',
      date: 'Jan 2026',
      description:
        'A unified interaction architecture across Unity C#, Unreal C++, and Unreal Blueprints, built around four core events: Hover Enter, Hover Exit, Hover Stay, and Interact.',
      mediaTag: 'GIF',
      media: interactableSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/09_Modular_Interactable_System` }],
    },
    {
      id: 'showcase-08',
      title: '08 \u00b7 Third-Person Movement: Ladder Climbing',
      date: 'Dec 2025',
      description:
        'Lets the player attach to ladders, climb up or down, and exit smoothly at the top or bottom.',
      mediaTag: 'GIF',
      media: ladderClimbingGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/08_ThirdPersonMovement_LadderClimbing` },
      ],
    },
    {
      id: 'showcase-07',
      title: '07 \u00b7 Third-Person Movement: Gliding',
      date: 'Dec 2025',
      description: 'Lets the player deploy a glider during freefall for a controlled, tunable descent.',
      mediaTag: 'GIF',
      media: glidingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/07_ThirdPersonMovement_Gliding` }],
    },
    {
      id: 'showcase-06',
      title: '06 \u00b7 Third-Person Movement: Ledge Walking',
      date: 'Nov 2025',
      description:
        'Lets the player snap onto a ledge and move laterally along it, with clean state handling for entering, traversing, and exiting.',
      mediaTag: 'GIF',
      media: ledgeWalkingGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/06_ThirdPersonMovement_Ledge-Walking` },
      ],
    },
    {
      id: 'showcase-05',
      title: '05 \u00b7 Third-Person Movement: Rolling',
      date: 'Nov 2025',
      description:
        'A responsive, directionally-aware rolling mechanic that blends animation, movement input, and dynamic rotation.',
      mediaTag: 'GIF',
      media: rollingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/05_ThirdPersonMovement_Rolling` }],
    },
    {
      id: 'showcase-04',
      title: '04 \u00b7 Third-Person Movement: Sliding',
      date: 'Nov 2025',
      description:
        'A friction-based sliding mechanic that reacts dynamically to player input, movement speed, and terrain slope.',
      mediaTag: 'GIF',
      media: slidingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/04_ThirdPersonMovement_Sliding` }],
    },
    {
      id: 'showcase-03',
      title: '03 \u00b7 Third-Person Movement: Crouching & Proning',
      date: 'Oct 2025',
      description:
        'Adds crouching and proning, letting the player dynamically adjust stance based on environment and input.',
      mediaTag: 'GIF',
      media: crouchingProningGif,
      links: [
        {
          label: 'Repo',
          href: `${SHOWCASE_BASE}/03_ThirdPersonMovement_Crouching_&_Proning`,
        },
      ],
    },
    {
      id: 'showcase-02',
      title: '02 \u00b7 Third-Person Movement: Jumping',
      date: 'Oct 2025',
      description:
        'Adds vertical movement and mid-air control on top of the base mobility system, using animation-driven jump and double-jump forces.',
      mediaTag: 'GIF',
      media: jumpingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/02_ThirdPersonMovement_Jumping` }],
    },
    {
      id: 'showcase-01',
      title: '01 \u00b7 Third-Person Movement: Base Mobility',
      date: 'Oct 2025',
      description:
        'A fully functional third-person movement system built in both Unity (C#) and Unreal Engine (C++ and Blueprints).',
      mediaTag: 'GIF',
      media: baseMobilityGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/01_ThirdPersonMovement_BaseMobility` }],
    },
    {
      id: 'replipaint',
      title: 'RepliPaint',
      date: 'September 2025',
      description:
        'A 3-week prototype made for Xuventude Crea 2025, where the goal is to repaint a scene by matching the referenced tones and switching between tools and colors. The playable level is inspired by the pools of Antas de Ulla.',
      mediaTag: 'IMG',
      media: 'https://img.itch.zone/aW1nLzIzOTIwNTg4LnBuZw==/original/Y9IRgp.png',
      links: [{ label: 'Itch.io', href: 'https://lukkasvn.itch.io/replipaint-prototipo-xuventude-crea' }],
    },
    {
      id: 'bounce-it',
      title: 'Bounce It',
      date: 'Aug 2025',
      description:
        'A fast-paced arcade game built around one core rule: keep the ball bouncing. Shipped solo on Steam with Positive reviews and a full skin and progression system.',
      mediaTag: 'IMG',
      media:
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3482000/8c045d53bbf6a3bbedc4cdcf8c2a7f0441314c64/header.jpg',
      links: [{ label: 'Steam', href: 'https://store.steampowered.com/app/3482000/Bounce_IT/' }],
    },
    {
      id: 'labrat-nobody',
      title: 'LabRat: Nobody',
      date: 'June 2023',
      description:
        'My very first game project: a puzzle-platformer prototype that tells its story through ambient narrative, built to show what the finished game could look like and to serve as a final proyect.',
      mediaTag: 'IMG',
      media: 'https://img.itch.zone/aW1nLzEyNTUzNTQ2LmpwZw==/original/whbdMT.jpg',
      links: [{ label: 'Itch.io', href: 'https://lukkasvn.itch.io/labrat-nobody-demo' }],
    },
  ],
  es: [
    {
      id: 'showcase-22',
      title: '22 \u00b7 Sistema Modular de Destructibles',
      date: 'May 2026',
      description:
        'Objetos destructibles data-driven, con daño, feedback visual, spawn opcional de debris y soporte de respawn.',
      mediaTag: 'GIF',
      media: destructiblesSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/22_Modular_Destructibles_System` }],
    },
    {
      id: 'showcase-21',
      title: '21 \u00b7 Sistema Modular de Drops',
      date: 'Abr 2026',
      description:
        'Un sistema de drops totalmente data-driven, con dispersión física, flotación suave y recogida por trigger.',
      mediaTag: 'GIF',
      media: droppablesSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/21_Modular_Droppables_System` }],
    },
    {
      id: 'showcase-20',
      title: '20 \u00b7 Sistema de Colocación de Objetos Serializable',
      date: 'Mar 2026',
      description:
        'Un sistema de colocación de objetos en primera persona con guardado integrado, que permite colocar, editar, reposicionar y eliminar objetos en tiempo real, persistiendo entre sesiones.',
      mediaTag: 'GIF',
      media: objectPlacingSystemGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/20_Serializable_Object_Placing_System` },
      ],
    },
    {
      id: 'showcase-19',
      title: '19 \u00b7 Sistema Gestor de Emisoras de Radio',
      date: 'Mar 2026',
      description:
        'Una emisión de radio persistente y sincronizada: todas las radios sintonizadas en la misma emisora reproducen el mismo contenido, y retoman donde se quedaron si se vuelven a encender a tiempo.',
      mediaTag: 'GIF',
      media: radioStationManagerGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/19_Radio_Station_Manager_System` }],
    },
    {
      id: 'showcase-18',
      title: '18 \u00b7 Visualizador de Cuadrícula de Assets (Herramienta)',
      date: 'Mar 2026',
      description:
        'Una herramienta de editor basada en datos para organizar y previsualizar assets del juego en una cuadrícula estructurada, sin saturar la escena principal.',
      mediaTag: 'GIF',
      media: assetGridVisualizerGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/18_TOOL_AssetVisualizer` }],
    },
    {
      id: 'showcase-17',
      title: '17 \u00b7 Sistema de Ascensor Multi-Planta',
      date: 'Mar 2026',
      description:
        'Un ascensor multi-planta dirigido por máquina de estados, con lógica automatizada y control directo del jugador durante el trayecto para evitar tirones y clipping.',
      mediaTag: 'GIF',
      media: multifloorElevatorGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/17_MultiFloor_Elevator_System` }],
    },
    {
      id: 'showcase-16',
      title: '16 \u00b7 Sistema de Linterna en Primera Persona',
      date: 'Feb 2026',
      description:
        'Un mecanismo de linterna modular con simulación de batería, parpadeo, inercia y configuración pensada para diseñadores.',
      mediaTag: 'GIF',
      media: fpFlashlightGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/16_FP_Flashlight_System` }],
    },
    {
      id: 'showcase-15',
      title: '15 \u00b7 Sistema Gestor de Audio',
      date: 'Feb 2026',
      description:
        'Un sistema de audio unificado que gestiona música, efectos, sonidos de UI, audio posicional 3D y control de volumen por mixer.',
      mediaTag: 'GIF',
      media: audioManagerGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/15_AudioManager_System` }],
    },
    {
      id: 'showcase-14',
      title: '14 \u00b7 Controlador en Primera Persona e Interactuables',
      date: 'Feb 2026',
      description:
        'Un controlador en primera persona unificado junto con su sistema de interacción, donde el personaje expone habilidades activables y los interactuables comparten una interfaz mínima.',
      mediaTag: 'GIF',
      media: fpControllerInteractablesGif,
      links: [
        {
          label: 'Repo',
          href: `${SHOWCASE_BASE}/14_FirstPersonController_&_FPInteractable_Systems`,
        },
      ],
    },
    {
      id: 'showcase-13',
      title: '13 \u00b7 Sistema Modular de Traducción de Texto Estático',
      date: 'Feb 2026',
      description:
        'Un enfoque sencillo de localización de texto estático, donde cada elemento guarda sus propias cadenas traducidas y un gestor central emite los cambios de idioma.',
      mediaTag: 'GIF',
      media: textTranslationSystemGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/13_Modular_Static_Text_Translation_System` },
      ],
    },
    {
      id: 'showcase-12',
      title: '12 \u00b7 Sistema Modular de Guardado',
      date: 'Ene 2026',
      description:
        'Una arquitectura de guardado y carga basada en componentes, donde cualquier comportamiento de gameplay puede definir sus propios datos guardables mediante un sistema de GUID estable.',
      mediaTag: 'GIF',
      media: saveSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/12_Modular_Save_System` }],
    },
    {
      id: 'showcase-11',
      title: '11 \u00b7 Sistema Modular de Puzles por Trigger',
      date: 'Ene 2026',
      description:
        'Una arquitectura de puzles basada en eventos, construida con volúmenes de trigger y validación por tags, montada sin dependencias fijas entre triggers.',
      mediaTag: 'GIF',
      media: triggerPuzzleSystemGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/11_Modular_TriggerBased_Puzzle_System` },
      ],
    },
    {
      id: 'showcase-10',
      title: '10 \u00b7 Sistema Modular de Diálogo Simple',
      date: 'Ene 2026',
      description:
        'Una arquitectura de diálogo ligera y no ramificada en Unity C#, Unreal C++ y Unreal Blueprints, con tipos de diálogo Locked, Base y Used.',
      mediaTag: 'GIF',
      media: dialogueSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/10_Simple_Modular_Dialogue_System` }],
    },
    {
      id: 'showcase-09',
      title: '09 \u00b7 Sistema Modular de Interactuables',
      date: 'Ene 2026',
      description:
        'Una arquitectura de interacción unificada en Unity C#, Unreal C++ y Unreal Blueprints, construida sobre cuatro eventos base: Hover Enter, Hover Exit, Hover Stay e Interact.',
      mediaTag: 'GIF',
      media: interactableSystemGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/09_Modular_Interactable_System` }],
    },
    {
      id: 'showcase-08',
      title: '08 \u00b7 Movimiento en Tercera Persona: Escalar Escaleras',
      date: 'Dic 2025',
      description:
        'Permite al jugador engancharse a escaleras, subir o bajar, y salir con suavidad tanto por arriba como por abajo.',
      mediaTag: 'GIF',
      media: ladderClimbingGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/08_ThirdPersonMovement_LadderClimbing` },
      ],
    },
    {
      id: 'showcase-07',
      title: '07 \u00b7 Movimiento en Tercera Persona: Planeo',
      date: 'Dic 2025',
      description:
        'Permite al jugador desplegar un planeador durante la caída libre para un descenso controlado y ajustable.',
      mediaTag: 'GIF',
      media: glidingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/07_ThirdPersonMovement_Gliding` }],
    },
    {
      id: 'showcase-06',
      title: '06 \u00b7 Movimiento en Tercera Persona: Andar por Salientes',
      date: 'Nov 2025',
      description:
        'Permite al jugador engancharse a un saliente y moverse lateralmente por él, con una gestión de estados limpia al entrar, recorrer y salir.',
      mediaTag: 'GIF',
      media: ledgeWalkingGif,
      links: [
        { label: 'Repo', href: `${SHOWCASE_BASE}/06_ThirdPersonMovement_Ledge-Walking` },
      ],
    },
    {
      id: 'showcase-05',
      title: '05 \u00b7 Movimiento en Tercera Persona: Rodada',
      date: 'Nov 2025',
      description:
        'Un mecanismo de rodada direccional y responsivo que combina animación, entrada de movimiento y rotación dinámica.',
      mediaTag: 'GIF',
      media: rollingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/05_ThirdPersonMovement_Rolling` }],
    },
    {
      id: 'showcase-04',
      title: '04 \u00b7 Movimiento en Tercera Persona: Deslizamiento',
      date: 'Nov 2025',
      description:
        'Un mecanismo de deslizamiento basado en fricción que reacciona dinámicamente a la entrada del jugador, la velocidad de movimiento y la pendiente del terreno.',
      mediaTag: 'GIF',
      media: slidingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/04_ThirdPersonMovement_Sliding` }],
    },
    {
      id: 'showcase-03',
      title: '03 \u00b7 Movimiento en Tercera Persona: Agacharse y Tumbarse',
      date: 'Oct 2025',
      description:
        'Añade agacharse y tumbarse boca abajo, permitiendo ajustar la postura dinámicamente según el entorno y la entrada del jugador.',
      mediaTag: 'GIF',
      media: crouchingProningGif,
      links: [
        {
          label: 'Repo',
          href: `${SHOWCASE_BASE}/03_ThirdPersonMovement_Crouching_&_Proning`,
        },
      ],
    },
    {
      id: 'showcase-02',
      title: '02 \u00b7 Movimiento en Tercera Persona: Salto',
      date: 'Oct 2025',
      description:
        'Añade movimiento vertical y control en el aire sobre el sistema de movilidad base, usando saltos y dobles saltos dirigidos por animación.',
      mediaTag: 'GIF',
      media: jumpingGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/02_ThirdPersonMovement_Jumping` }],
    },
    {
      id: 'showcase-01',
      title: '01 \u00b7 Movimiento en Tercera Persona: Movilidad Base',
      date: 'Oct 2025',
      description:
        'Un sistema de movimiento en tercera persona totalmente funcional, hecho en Unity (C#) y Unreal Engine (C++ y Blueprints).',
      mediaTag: 'GIF',
      media: baseMobilityGif,
      links: [{ label: 'Repo', href: `${SHOWCASE_BASE}/01_ThirdPersonMovement_BaseMobility` }],
    },
    {
      id: 'replipaint',
      title: 'RepliPaint',
      date: 'Septiembre 2025',
      description:
        'Un prototipo hecho en 3 semanas para el Xuventude Crea 2025, donde el objetivo es repintar una escena siguiendo los tonos de referencia y alternando entre herramientas y colores. El nivel jugable está inspirado en las piscinas de Antas de Ulla.',
      mediaTag: 'IMG',
      media: 'https://img.itch.zone/aW1nLzIzOTIwNTg4LnBuZw==/original/Y9IRgp.png',
      links: [{ label: 'Itch.io', href: 'https://lukkasvn.itch.io/replipaint-prototipo-xuventude-crea' }],
    },
    {
      id: 'bounce-it',
      title: 'Bounce It',
      date: 'Ago 2025',
      description:
        'Un juego arcade de ritmo rápido construido en torno a una única regla: mantener la pelota rebotando. Publicado en solitario en Steam, con reseñas positivas y un sistema completo de skins y progresión.',
      mediaTag: 'IMG',
      media:
        'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3482000/8c045d53bbf6a3bbedc4cdcf8c2a7f0441314c64/header.jpg',
      links: [{ label: 'Steam', href: 'https://store.steampowered.com/app/3482000/Bounce_IT/' }],
    },
    {
      id: 'labrat-nobody',
      title: 'LabRat: Nobody',
      date: 'Junio 2023',
      description:
        'Mi primer videojuego desarrollado: un prototipo de puzles y plataformas que cuenta su historia a través de narrativa ambiental, pensado para mostrar cómo sería el juego terminado y como trabajo de fin de ciclo.',
      mediaTag: 'IMG',
      media: 'https://img.itch.zone/aW1nLzEyNTUzNTQ2LmpwZw==/original/whbdMT.jpg',
      links: [{ label: 'Itch.io', href: 'https://lukkasvn.itch.io/labrat-nobody-demo' }],
    },
  ],
};