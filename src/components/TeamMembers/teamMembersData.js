const teamMembersData = [
    {
        name: "Kritika Obhan",
        role: "Psychologist & Team Leader",
        image: "https://s3-alpha-sig.figma.com/img/a9cb/c6cb/56e72fc7fb61696564f0fe9d58954981?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJjkTZG1HrzrD~30T4eO9MEES1JSdN9~IhpUPqpTd4wKw6WwUCeUa9yfFACQPU1y6WL2z2QVKIAP9Hj~PkvUeMU2XVvbPEGM80MVwUUjoaAf8MFDcum1TCHuNXanr5gJ5DRoG~k5DViUdAamg0kaE6HPU~ZUcj1AZccwG-qJWqaDCwCslkaTRLmU~m8WcBT88iAAQpL8rvdE0TBL6W6yD3EN52DgOj8VIUBoJpvMDMQ0hRQdVg6qpineizXu0Ki4k3v2QEA8YAlR1V895qGBfTRGnRPgE1cledKWl9Ptxl~DPwiEQutYhqy65qzvmnKQIk2rAEUftrmproUnuYRttQ__"
    },
    {
        name: "Ms. Dhruvi Sanghavi",
        role: "Psychologist",
        image: "https://s3-alpha-sig.figma.com/img/ce18/2d9f/64cfa7fe996addb05514b4279c4533a1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecAEgjhhn9-IJapCLW6HRPNh0QNhMgB5WpYReoEBzJTfMVlRFUHoGYgQv8GFX1Ryk~2DYfchMUSG40sto8qTNel~OyaOPVbs8y8iJOtt8zDsNjnwaV1peeu3eGtVQ92iB3vBSp8PVDW4REi2RYoFgQhK8UE0dLq5rIZlpfMRc6lTMkDh7NuMOsFRNYmLb2OFF-Rx7DyUwC-MjcqwKK1hBnlVjSXcjgpuHTErHyYx4m9JV-osrTbUCu2QED0XeuqlDoRqNtduOOiZw~~sDrC1cj1Ppwkg6AERCSrpK7JlOidYQ6~F9NZT7TyKuc3E5ASk5NM9zm3x5Y2H1DoYFsHDMQ__"
    },
    {
        name: "Ms. Tamanpreet Arora",
        role: "Psychologist",
        image: "https://s3-alpha-sig.figma.com/img/dd25/a4f5/1890938ca5b30e86b374600523eb115e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvWyCf5M38v4-vm0-6i~xrSARw471F7jH650AAofsJ2thKL2L3s8XHskk9fEzvCG1lHoI9BG0law1iteos9HeAIgzDiruHBXTSd8crrRFinwKAodpUXTC9Xka8peYMxS1QfvFqejfo4JLbWvzOVyEEOD4k6tgBFkwWWo0vbSP9S9eyPMYsZh37n6Gzbj~~fVy5okTymAnlX~oHTiLu6aXs0bN7HwC96vYzEtI5L-JLeKw-4NVDSqDRkkJU~bIW4wCdHjcGEqTb4Tibhd7E80mOs5ku-4NzhBOY0UMtE4tK12njYNf90LC0I38p-~xHT7egkY45M8pag3nun1d0zJ-g__"
    },
    {
        name: "Ms. Amruta Shetty",
        role: "Psychologist",
        image: "https://s3-alpha-sig.figma.com/img/ea82/3ab6/e317a867ba74bec1e877dc70ca262699?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ncWeldIT4grjZwiqRExk7AZMmJitv3erLTpCt2Uyb~Lcp6QMxn14KTuSGbmUWIZfSaNPaUG97US4z~gTGdWJ1OpRRCOCYuP9abvb0w2LX-JR0PJM3Mg4ekwFflxE6yEj-yLsQ3fkGo9zy-nchbEu-B6DJaVR8Hj5FABV3QSCAFj7pDzqCzebiXeYernBHHuxBAFD3A8gSil~DD2OSsfLTOrQBF8gbmk5j23tQ0E1XJbFlj33BNJjkirfWRe1Jx2gOXqxfZ9Zk~wyOJL2PCzqWv2rZPAMFPUiAftc~dA7OF9YcIQIImfIels2KrJaGHy~L6n8m7rfRj157otypOo8vQ__"
    },
    {
        name: "Ms. Nimisha Yadav",
        role: "Psychologist",
        image: "https://s3-alpha-sig.figma.com/img/085f/d907/7d6ddf68da86b79946dae739380b98de?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcxGbuME~nhDhJRkTp0ffb5YjP2nZnZaPXSHJXMRWPzcRWZaotU7~njBmVOrHkIIXGfUBnhE490Xff5D~LfAigC31O7gVL6-qWH8QgWEMa42CQh~x6pmxjTCGLl-TniJDrgYcvf949PgPrtLDC~2m8UkQGdtVjwEYpqES360dDhIbDaOuk3gs8IQACma6wOkOdQu0dQXifpQsc-sA7Plr95qYyfiGuwxM2jKaFCbtyU19VUgTjQHTELNYlmoQtQvPGW9iml9LZJl9K2vb7GsdprWwUuMaoit1k4Pq4vm78aLmIDyNfdNhu2md~o9b273M62xqmjBYhLKAJT74g0Haw__"
    },
]


export default teamMembersData;