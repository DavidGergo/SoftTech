# SoftTech – ME-nthetetlenek

A *Szoftvertechnológia* tárgy csapatprojektjének dokumentációs oldala (19. feladat: az uni-app jelenlegi funkcióinak gyakorlatiasabb átdolgozása).

Élő oldal: https://davidgergo.github.io/SoftTech/

## A mappa felépítése

```
SoftTech/
├── index.html            Főoldal (projektterv címlap, csapattagok)
├── h1.html               H1 – Projektterv
├── h2.html               H2 – Vízió dokumentum
├── h3.html               H3 – SRS, szótár, felhasználói kézikönyv, munkanapló
├── h4.html               H4 – áttekintő oldal, innen nyílnak a H4 dokumentumai
│
├── assets/               Közös stílus és szkript minden oldalhoz
│   ├── style.css
│   └── script.js         (mobilmenü)
│
├── H3/                   A H3 kiegészítő anyagai
│   ├── H3-uml.pdf                    use case ábrák magyarázattal
│   ├── H3_use_case_diagramok.txt     az ábrák leírása és PlantUML-forrása
│   ├── uml/                          1.png … 7.png (use case diagramok)
│   └── vazlatok/                     a H3 korábbi, részletekben készült változatai
│
└── H4/                   A H4 dokumentumai
    ├── ME-nthetetlenek_ANAL10.html   Analízis modell 1.0 (rövid, egyeztetésre)
    ├── ME-nthetetlenek_ANAL11.html   Analízis modell 1.1 (teljes)
    ├── ME-nthetetlenek_RTERV10.html  Rendszertervezés 1.0
    ├── ME-nthetetlenek_SZOTAR20.html Szótár 2.0
    ├── H4_abrak.pdf                  az összes H4 ábra magyarázattal (nyomtatható)
    ├── H4_abrak.html                 ugyanez böngészőben
    └── uml/                          az ábrák PlantUML-forrása (.puml) és képe (.svg)
```

## Szabályok új anyag hozzáadásakor

- A menüből elérhető oldal (`h5.html`) a gyökérbe kerül, a hozzá tartozó minden egyéb fájl (ábrák, PDF-ek, további dokumentumok) egy `H5/` mappába.
- A közös stílus és szkript az `assets/` mappában van; az almappában lévő oldalak `../assets/style.css` útvonallal hivatkoznak rá.
- A tantárgy által előírt fájlnevek (például `csapatnev_ANALxx.html`) csak ékezet nélküli betűket, számjegyeket, kötőjelet és aláhúzást tartalmazhatnak; az `xx` a verziószám.
- Az ábrák forrását (`.puml`) mindig a kész kép mellé tesszük, hogy később módosítható legyen.
