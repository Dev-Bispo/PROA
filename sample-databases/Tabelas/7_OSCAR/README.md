# Oscar - Exercícios SQL

Bem-vindo à base de dados do **Oscar**!

O Oscar é a premiação mais prestigiada do cinema mundial, realizada anualmente desde 1929 pela Academia de Artes e Ciências Cinematográficas. Nesta base de dados, você encontrará registros históricos de indicados e vencedores de diversas categorias ao longo de quase 100 anos de história do cinema.

Nestes exercícios, você vai explorar o banco de dados SQL do Oscar e responder perguntas que revelam insights fascinantes sobre a história do cinema, tendências de premiação, e momentos marcantes da indústria cinematográfica.

## Avaliação

- **Nível 1-4**: Operações básicas e queries simples
- **Nível 5-8**: Agregações e análise de dados
- **Nível 9-11**: Queries complexas e pensamento analítico
- **Nível 12-14**: Expertise avançada e pensamento estratégico

**Objetivo de aprendizado**: Ao completar todos os níveis, você será capaz de trabalhar com bases de dados históricas complexas, realizar análises estatísticas sofisticadas e extrair insights valiosos de grandes volumes de dados.

---

## Nível 1: Primeiros Passos

### Conhecendo a Base de Dados

**1.1** Quantos registros existem na tabela de indicados ao Oscar?



R: 10889 registros

```sql
select count(*) from indicados_ao_oscar;
```

**1.2.1** Quais são as diferentes categorias de premiação que existem no banco de dados? Liste todas as categorias únicas.



R:
ACTOR
ACTRESS
ART DIRECTION
CINEMATOGRAPHY
DIRECTING (Comedy Picture)
DIRECTING (Dramatic Picture)
ENGINEERING EFFECTS
OUTSTANDING PICTURE
UNIQUE AND ARTISTIC PICTURE
WRITING (Adaptation)
WRITING (Original Story)
WRITING (Title Writing)
SPECIAL AWARD
DIRECTING
WRITING
OUTSTANDING PRODUCTION
SOUND RECORDING
SHORT SUBJECT (Cartoon)
SHORT SUBJECT (Comedy)
SHORT SUBJECT (Novelty)
ASSISTANT DIRECTOR
FILM EDITING
MUSIC (Scoring)
MUSIC (Song)
DANCE DIRECTION
WRITING (Screenplay)
ACTOR IN A SUPPORTING ROLE
ACTRESS IN A SUPPORTING ROLE
SHORT SUBJECT (Color)
SHORT SUBJECT (One-reel)
SHORT SUBJECT (Two-reel)
IRVING G. THALBERG MEMORIAL AWARD
MUSIC (Original Score)
CINEMATOGRAPHY (Black-and-White)
CINEMATOGRAPHY (Color)
SPECIAL EFFECTS
ART DIRECTION (Black-and-White)
ART DIRECTION (Color)
WRITING (Original Screenplay)
DOCUMENTARY (Short Subject)
MUSIC (Music Score of a Dramatic Picture)
MUSIC (Scoring of a Musical Picture)
OUTSTANDING MOTION PICTURE
DOCUMENTARY
MUSIC (Music Score of a Dramatic or Comedy Picture)
WRITING (Original Motion Picture Story)
DOCUMENTARY (Feature)
BEST MOTION PICTURE
WRITING (Motion Picture Story)
COSTUME DESIGN (Black-and-White)
COSTUME DESIGN (Color)
SPECIAL FOREIGN LANGUAGE FILM AWARD
WRITING (Story and Screenplay)
HONORARY FOREIGN LANGUAGE FILM AWARD
HONORARY AWARD
FOREIGN LANGUAGE FILM
WRITING (Screenplay--Adapted)
WRITING (Screenplay--Original)
JEAN HERSHOLT HUMANITARIAN AWARD
COSTUME DESIGN
SHORT SUBJECT (Live Action)
WRITING (Screenplay--based on material from another medium)
WRITING (Story and Screenplay--written directly for the screen)
SOUND
MUSIC (Music Score--substantially original)
MUSIC (Scoring of Music--adaptation or treatment)
BEST PICTURE
SOUND EFFECTS
SPECIAL VISUAL EFFECTS
MUSIC (Original Music Score)
MUSIC (Original Score--for a motion picture [not a musical])
MUSIC (Score of a Musical Picture--original or adaptation)
MUSIC (Song--Original for the Picture)
WRITING (Story and Screenplay--based on material not previously published or produced)
MUSIC (Original Song Score)
WRITING (Story and Screenplay--based on factual material or material not previously published or produced)
MUSIC (Original Dramatic Score)
MUSIC (Scoring: Adaptation and Original Song Score)
SHORT SUBJECT (Animated)
SPECIAL ACHIEVEMENT AWARD (Visual Effects)
MUSIC (Scoring: Original Song Score and Adaptation -or- Scoring: Adaptation)
SHORT FILM (Animated)
SHORT FILM (Live Action)
WRITING (Screenplay Adapted from Other Material)
MUSIC (Original Song)
SPECIAL ACHIEVEMENT AWARD (Sound Effects)
ACTOR IN A LEADING ROLE
ACTRESS IN A LEADING ROLE
MUSIC (Original Song Score and Its Adaptation or Adaptation Score)
WRITING (Screenplay Written Directly for the Screen--based on factual material or on story material not previously published or produced)
VISUAL EFFECTS
SPECIAL ACHIEVEMENT AWARD
SPECIAL ACHIEVEMENT AWARD (Sound Effects Editing)
MUSIC (Adaptation Score)
WRITING (Screenplay Based on Material from Another Medium)
WRITING (Screenplay Written Directly for the Screen)
MUSIC (Original Song Score and Its Adaptation -or- Adaptation Score)
SPECIAL ACHIEVEMENT AWARD (Sound Editing)
SHORT FILM (Dramatic Live Action)
MAKEUP
SOUND EFFECTS EDITING
MUSIC (Original Song Score or Adaptation Score)
WRITING (Screenplay Based on Material Previously Produced or Published)
MUSIC (Original Musical or Comedy Score)
SOUND EDITING
ANIMATED FEATURE FILM
WRITING (Adapted Screenplay)
SOUND MIXING
MAKEUP AND HAIRSTYLING
PRODUCTION DESIGN
INTERNATIONAL FEATURE FILM
DOCUMENTARY FEATURE FILM
DOCUMENTARY SHORT FILM
GORDON E. SAWYER AWARD
AWARD OF COMMENDATION

```sql
select distinct categoria from indicados_ao_oscar;
```

**1.2.2** **Quantas** categorias únicas existem?

R: 115 registros


```sql
select count(distinct categoria) from indicados_ao_oscar;
```

**1.3** Qual foi o primeiro ano de cerimônia do Oscar registrado na base?
R: 1928

```SQL
 select ano_cerimonia from indicados_ao_oscar where id_registro = 1;
```

**1.4** Qual foi o último ano de cerimônia registrado na base?
R:2024
```sql
 select * from indicados_ao_oscar order by id_registro desc limit 1;
```
**1.5** Quantas cerimônias do Oscar estão registradas no total?
R: 10889 registros
```sql
select count(ano_cerimonia) from indicados_ao_oscar;
```
**1.6** Atualize os registros da tabela com os dados do Oscar 2025 e 2026 (pesquise os vencedores e adicione-os).
R:
INSERT INTO indicados_ao_oscar (ano_filmagem, ano_cerimonia, edicao_cerimonia, categoria, nome_indicado, nome_filme, vencedor) VALUES
-- OSCAR 2025 (97ª Edição) - Referente aos filmes de 2024
-- Melhor Filme
(2024, 2025, 97, 'Melhor Filme', 'Sean Baker', 'Anora', TRUE),
(2024, 2025, 97, 'Melhor Filme', 'Brady Corbet e Mona Fastvold', 'The Brutalist', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'James Mangold', 'A Complete Unknown', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'Peter Straughan', 'Conclave', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'Denis Villeneuve', 'Dune: Part Two', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'Jacques Audiard', 'Emilia Pérez', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'Walter Salles', 'Ainda Estou Aqui', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'RaMell Ross', 'Nickel Boys', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'Coralie Fargeat', 'The Substance', FALSE),
(2024, 2025, 97, 'Melhor Filme', 'Jon M. Chu', 'Wicked', FALSE),

-- Melhor Direção
(2024, 2025, 97, 'Melhor Direção', 'Sean Baker', 'Anora', TRUE),
(2024, 2025, 97, 'Melhor Direção', 'Jacques Audiard', 'Emilia Pérez', FALSE),
(2024, 2025, 97, 'Melhor Direção', 'Brady Corbet', 'The Brutalist', FALSE),
(2024, 2025, 97, 'Melhor Direção', 'Coralie Fargeat', 'The Substance', FALSE),
(2024, 2025, 97, 'Melhor Direção', 'James Mangold', 'A Complete Unknown', FALSE),

-- Melhor Ator
(2024, 2025, 97, 'Melhor Ator', 'Adrien Brody', 'The Brutalist', TRUE),
(2024, 2025, 97, 'Melhor Ator', 'Timothée Chalamet', 'A Complete Unknown', FALSE),
(2024, 2025, 97, 'Melhor Ator', 'Colman Domingo', 'Sing Sing', FALSE),
(2024, 2025, 97, 'Melhor Ator', 'Ralph Fiennes', 'Conclave', FALSE),
(2024, 2025, 97, 'Melhor Ator', 'Sebastian Stan', 'The Apprentice', FALSE),

-- Melhor Atriz
(2024, 2025, 97, 'Melhor Atriz', 'Mikey Madison', 'Anora', TRUE),
(2024, 2025, 97, 'Melhor Atriz', 'Cynthia Erivo', 'Wicked', FALSE),
(2024, 2025, 97, 'Melhor Atriz', 'Karla Sofía Gascón', 'Emilia Pérez', FALSE),
(2024, 2025, 97, 'Melhor Atriz', 'Demi Moore', 'The Substance', FALSE),
(2024, 2025, 97, 'Melhor Atriz', 'Fernanda Torres', 'Ainda Estou Aqui', FALSE),

-- Melhor Ator Coadjuvante
(2024, 2025, 97, 'Melhor Ator Coadjuvante', 'Kieran Culkin', 'A Real Pain', TRUE),
(2024, 2025, 97, 'Melhor Ator Coadjuvante', 'Yura Borisov', 'Anora', FALSE),
(2024, 2025, 97, 'Melhor Ator Coadjuvante', 'Edward Norton', 'A Complete Unknown', FALSE),
(2024, 2025, 97, 'Melhor Ator Coadjuvante', 'Guy Pearce', 'The Brutalist', FALSE),
(2024, 2025, 97, 'Melhor Ator Coadjuvante', 'Jeremy Strong', 'The Apprentice', FALSE),

-- Melhor Atriz Coadjuvante
(2024, 2025, 97, 'Melhor Atriz Coadjuvante', 'Zoe Saldaña', 'Emilia Pérez', TRUE),
(2024, 2025, 97, 'Melhor Atriz Coadjuvante', 'Monica Barbaro', 'A Complete Unknown', FALSE),
(2024, 2025, 97, 'Melhor Atriz Coadjuvante', 'Ariana Grande', 'Wicked', FALSE),
(2024, 2025, 97, 'Melhor Atriz Coadjuvante', 'Felicity Jones', 'The Brutalist', FALSE),
(2024, 2025, 97, 'Melhor Atriz Coadjuvante', 'Isabella Rossellini', 'Conclave', FALSE),

-- Melhor Filme Internacional
(2024, 2025, 97, 'Melhor Filme Internacional', 'Walter Salles', 'Ainda Estou Aqui', TRUE),
(2024, 2025, 97, 'Melhor Filme Internacional', 'Mohammad Rasoulof', 'The Seed of the Sacred Fig', FALSE),
(2024, 2025, 97, 'Melhor Filme Internacional', 'Jacques Audiard', 'Emilia Pérez', FALSE),
(2024, 2025, 97, 'Melhor Filme Internacional', 'Magnus von Horn', 'The Girl With the Needle', FALSE),
(2024, 2025, 97, 'Melhor Filme Internacional', 'Gints Zilbalodis', 'Flow', FALSE),


-- OSCAR 2026 (98ª Edição) - Referente aos filmes de 2025
-- Melhor Filme
(2025, 2026, 98, 'Melhor Filme', 'Paul Thomas Anderson', 'Uma Batalha Após a Outra', TRUE),
(2025, 2026, 98, 'Melhor Filme', 'Yorgos Lanthimos', 'Bugonia', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Guillermo del Toro', 'Frankenstein', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Chloé Zhao', 'Hamnet', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Josh Safdie', 'Marty Supreme', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Kleber Mendonça Filho', 'O Agente Secreto', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Joachim Trier', 'Valor Sentimental', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Ryan Coogler', 'Pecadores', FALSE),
(2025, 2026, 98, 'Melhor Filme', 'Clint Bentley', 'Sonhos de Trem', FALSE),

-- Melhor Direção
(2025, 2026, 98, 'Melhor Direção', 'Paul Thomas Anderson', 'Uma Batalha Após a Outra', TRUE),
(2025, 2026, 98, 'Melhor Direção', 'Chloé Zhao', 'Hamnet', FALSE),
(2025, 2026, 98, 'Melhor Direção', 'Josh Safdie', 'Marty Supreme', FALSE),
(2025, 2026, 98, 'Melhor Direção', 'Joachim Trier', 'Valor Sentimental', FALSE),
(2025, 2026, 98, 'Melhor Direção', 'Ryan Coogler', 'Pecadores', FALSE),

-- Melhor Ator
(2025, 2026, 98, 'Melhor Ator', 'Michael B. Jordan', 'Pecadores', TRUE),
(2025, 2026, 98, 'Melhor Ator', 'Timothée Chalamet', 'Marty Supreme', FALSE),
(2025, 2026, 98, 'Melhor Ator', 'Leonardo DiCaprio', 'Uma Batalha Após a Outra', FALSE),
(2025, 2026, 98, 'Melhor Ator', 'Ethan Hawke', 'Blue Moon', FALSE),
(2025, 2026, 98, 'Melhor Ator', 'Wagner Moura', 'O Agente Secreto', FALSE),

-- Melhor Atriz
(2025, 2026, 98, 'Melhor Atriz', 'Jessie Buckley', 'Hamnet', TRUE),
(2025, 2026, 98, 'Melhor Atriz', 'Rose Byrne', 'Se Eu Tivesse Pernas, Eu Te Chutaria', FALSE),
(2025, 2026, 98, 'Melhor Atriz', 'Kate Hudson', 'Song Sung Blue', FALSE),
(2025, 2026, 98, 'Melhor Atriz', 'Renate Reinsve', 'Valor Sentimental', FALSE),
(2025, 2026, 98, 'Melhor Atriz', 'Emma Stone', 'Bugonia', FALSE),

-- Melhor Ator Coadjuvante
(2025, 2026, 98, 'Melhor Ator Coadjuvante', 'Sean Penn', 'Uma Batalha Após a Outra', TRUE),
(2025, 2026, 98, 'Melhor Ator Coadjuvante', 'Benicio Del Toro', 'Uma Batalha Após a Outra', FALSE),
(2025, 2026, 98, 'Melhor Ator Coadjuvante', 'Jacob Elordi', 'Frankenstein', FALSE),
(2025, 2026, 98, 'Melhor Ator Coadjuvante', 'Delroy Lindo', 'Pecadores', FALSE),
(2025, 2026, 98, 'Melhor Ator Coadjuvante', 'Stellan Skarsgård', 'Valor Sentimental', FALSE),

-- Melhor Atriz Coadjuvante
(2025, 2026, 98, 'Melhor Atriz Coadjuvante', 'Amy Madigan', 'A Hora do Mal', TRUE),
(2025, 2026, 98, 'Melhor Atriz Coadjuvante', 'Elle Fanning', 'Valor Sentimental', FALSE),
(2025, 2026, 98, 'Melhor Atriz Coadjuvante', 'Inga Ibsdotter Lilleaas', 'Valor Sentimental', FALSE),
(2025, 2026, 98, 'Melhor Atriz Coadjuvante', 'Wunmi Mosaku', 'Pecadores', FALSE),
(2025, 2026, 98, 'Melhor Atriz Coadjuvante', 'Teyana Taylor', 'Uma Batalha Após a Outra', FALSE),

-- Melhor Filme Internacional
(2025, 2026, 98, 'Melhor Filme Internacional', 'Joachim Trier', 'Valor Sentimental', TRUE),
(2025, 2026, 98, 'Melhor Filme Internacional', 'Jafar Panahi', 'Foi Apenas um Acidente', FALSE),
(2025, 2026, 98, 'Melhor Filme Internacional', 'Kleber Mendonça Filho', 'O Agente Secreto', FALSE),
(2025, 2026, 98, 'Melhor Filme Internacional', 'N/A', 'The Voice of Hind Rajab', FALSE),
(2025, 2026, 98, 'Melhor Filme Internacional', 'N/A', 'Sirat', FALSE);
---

## Nível 2: Explorando Categorias

**2.1** Quantas indicações existem para cada categoria? Agrupe por categoria e ordene da mais frequente para a menos frequente.
R: DIRECTING	469
FILM EDITING	450
ACTOR IN A SUPPORTING ROLE	440
ACTRESS IN A SUPPORTING ROLE	440
DOCUMENTARY (Short Subject)	378
BEST PICTURE	371
DOCUMENTARY (Feature)	345
CINEMATOGRAPHY	338
FOREIGN LANGUAGE FILM	315
ART DIRECTION	307
COSTUME DESIGN	295
MUSIC (Original Score)	270
SOUND	245
ACTOR IN A LEADING ROLE	240
ACTRESS IN A LEADING ROLE	240
ACTRESS	236
MUSIC (Original Song)	235
ACTOR	232
SHORT FILM (Live Action)	226
MUSIC (Song)	215
SHORT FILM (Animated)	215
SOUND RECORDING	195
SHORT SUBJECT (Cartoon)	169
CINEMATOGRAPHY (Black-and-White)	161
WRITING (Original Screenplay)	160
VISUAL EFFECTS	155
MUSIC (Music Score of a Dramatic or Comedy Picture)	148
ART DIRECTION (Black-and-White)	138
CINEMATOGRAPHY (Color)	135
HONORARY AWARD	133
MUSIC (Scoring of a Musical Picture)	127
WRITING (Screenplay Written Directly for the Screen)	120
ART DIRECTION (Color)	112
WRITING (Adapted Screenplay)	110
WRITING (Screenplay)	104
OUTSTANDING PRODUCTION	102
ANIMATED FEATURE FILM	99
WRITING (Screenplay--based on material from another medium)	95
SPECIAL EFFECTS	93
SHORT SUBJECT (One-reel)	90
BEST MOTION PICTURE	90
MAKEUP	87
SOUND EDITING	86
SOUND MIXING	85
SHORT SUBJECT (Two-reel)	81
COSTUME DESIGN (Black-and-White)	77
COSTUME DESIGN (Color)	77
Melhor Filme	76
SHORT SUBJECT (Live Action)	68
WRITING (Screenplay Based on Material from Another Medium)	65
MUSIC (Scoring)	64
WRITING (Story and Screenplay--written directly for the screen)	60
PRODUCTION DESIGN	60
SPECIAL AWARD	56
WRITING (Screenplay Based on Material Previously Produced or Published)	55
WRITING (Original Story)	52
WRITING (Motion Picture Story)	50
SOUND EFFECTS EDITING	47
MAKEUP AND HAIRSTYLING	46
IRVING G. THALBERG MEMORIAL AWARD	45
JEAN HERSHOLT HUMANITARIAN AWARD	44
MUSIC (Original Dramatic Score)	41
Melhor Direção	40
Melhor Ator	40
Melhor Atriz	40
Melhor Ator Coadjuvante	40
Melhor Atriz Coadjuvante	40
Melhor Filme Internacional	40
ASSISTANT DIRECTOR	35
WRITING (Story and Screenplay)	35
OUTSTANDING MOTION PICTURE	30
MUSIC (Scoring of Music--adaptation or treatment)	30
DOCUMENTARY	25
WRITING (Original Motion Picture Story)	25
MUSIC (Song--Original for the Picture)	25
INTERNATIONAL FEATURE FILM	25
DANCE DIRECTION	21
MUSIC (Music Score of a Dramatic Picture)	20
MUSIC (Music Score--substantially original)	20
WRITING (Story and Screenplay--based on factual material or material not previously published or produced)	20
MUSIC (Original Musical or Comedy Score)	20
WRITING (Adaptation)	17
SPECIAL VISUAL EFFECTS	16
SHORT SUBJECT (Comedy)	13
SHORT SUBJECT (Novelty)	12
WRITING	11
SOUND EFFECTS	10
MUSIC (Original Music Score)	10
MUSIC (Original Score--for a motion picture [not a musical])	10
MUSIC (Score of a Musical Picture--original or adaptation)	10
WRITING (Screenplay Adapted from Other Material)	10
WRITING (Screenplay Written Directly for the Screen--based on factual material or on story material not previously published or produced)	10
DOCUMENTARY FEATURE FILM	10
DOCUMENTARY SHORT FILM	10
SHORT SUBJECT (Animated)	9
SPECIAL ACHIEVEMENT AWARD (Visual Effects)	9
MUSIC (Scoring: Original Song Score and Adaptation -or- Scoring: Adaptation)	9
OUTSTANDING PICTURE	8
MUSIC (Original Song Score)	8
MUSIC (Scoring: Adaptation and Original Song Score)	8
SHORT SUBJECT (Color)	6
MUSIC (Original Song Score and Its Adaptation or Adaptation Score)	6
MUSIC (Original Song Score and Its Adaptation -or- Adaptation Score)	6
HONORARY FOREIGN LANGUAGE FILM AWARD	5
WRITING (Screenplay--Adapted)	5
WRITING (Screenplay--Original)	5
WRITING (Story and Screenplay--based on material not previously published or produced)	5
SPECIAL ACHIEVEMENT AWARD (Sound Effects Editing)	4
DIRECTING (Dramatic Picture)	3
ENGINEERING EFFECTS	3
UNIQUE AND ARTISTIC PICTURE	3
WRITING (Title Writing)	3
SPECIAL ACHIEVEMENT AWARD	3
MUSIC (Adaptation Score)	3
SHORT FILM (Dramatic Live Action)	3
MUSIC (Original Song Score or Adaptation Score)	3
DIRECTING (Comedy Picture)	2
SPECIAL FOREIGN LANGUAGE FILM AWARD	2
SPECIAL ACHIEVEMENT AWARD (Sound Effects)	1
SPECIAL ACHIEVEMENT AWARD (Sound Editing)	1
GORDON E. SAWYER AWARD	1
AWARD OF COMMENDATION	1

```sql
select categoria, count(categoria) as edicoes_categoria from indicados_ao_oscar group by categoria order by edicoes_categoria desc;

```
**2.2** Qual categoria teve mais indicações ao longo da história do Oscar?
R:DIRECTING	469

```sql
select categoria, count(categoria) as edicoes_categoria from indicados_ao_oscar group by categoria order by edicoes_categoria asc;

```

**2.3** Qual categoria teve menos indicações ao longo da história?
R:SPECIAL ACHIEVEMENT AWARD (Sound Effects)	1
SPECIAL ACHIEVEMENT AWARD (Sound Editing)	1
GORDON E. SAWYER AWARD	1
AWARD OF COMMENDATION	1

```sql
select categoria, count(categoria) as edicoes_categoria from indicados_ao_oscar group by categoria order by edicoes_categoria desc;

```

**2.4** A partir de que ano a categoria "ACTRESS" deixou de existir? (Dica: procure a última cerimônia com essa categoria)

**2.5** Quais categorias existiam na primeira cerimônia (1928) e não existem mais hoje?

**2.6** Liste todas as categorias que contêm a palavra "DIRECTING" no nome.

---

## Nível 3: Atores e Atrizes Famosos

### Natalie Portman

**3.1** Quantas vezes Natalie Portman foi indicada ao Oscar?

**3.2** Quantos Oscars Natalie Portman ganhou?

**3.3** Em quais anos e por quais filmes Natalie Portman foi indicada?

**3.4** Liste todas as indicações de Natalie Portman mostrando: ano, categoria, filme e se venceu.

### Viola Davis

**3.5** Quantas vezes Viola Davis foi indicada ao Oscar?

R: 4

```sql
SELECT COUNT(*) FROM indicados_ao_oscar
WHERE nome_indicado LIKE "%Viola Davis%"
```

**3.6** Quantos Oscars Viola Davis ganhou?

R: 1

```sql
SELECT COUNT(*) FROM indicados_ao_oscar
WHERE nome_indicado LIKE "%Viola Davis%"
AND 
vencedor = true;
```

**3.7** Por quais filmes Viola Davis foi indicada?

### Amy Adams

**3.8** Amy Adams já ganhou algum Oscar?

**3.9** Quantas vezes Amy Adams foi indicada sem ganhar?

### Denzel Washington

**3.10** Denzel Washington já ganhou algum Oscar?

**3.11** Quantas vezes Denzel Washington foi indicado ao Oscar?

**3.12** Liste todos os Oscars que Denzel Washington ganhou (ano, categoria, filme).

---

## Nível 4: Vencedores Históricos

**4.1** Quem ganhou o primeiro Oscar para Melhor Atriz (ACTRESS)? Em que ano e por qual filme?

**4.2** Quem ganhou o primeiro Oscar para Melhor Ator (ACTOR)? Em que ano e por qual filme?

**4.3** Quantos vencedores existem ao todo na base de dados?

**4.4** Liste todos os filmes que ganharam o Oscar de Melhor Filme (categoria "OUTSTANDING PICTURE" ou "BEST PICTURE").

**4.5** Quantos filmes diferentes já ganharam o Oscar?

---

## Nível 5: Análise de Indicações

**5.1** Quais atores/atrizes foram indicados mais de uma vez? Liste o nome e o número de indicações.

**5.2** Qual ator ou atriz tem o maior número de indicações na história do Oscar?

**5.3** Quais atores foram indicados mais de 3 vezes, mas nunca ganharam?

**5.4** Encontre todos os artistas que foram indicados em categorias diferentes (ex: ator e diretor).

**5.5** Quantos indicados têm exatamente 1 indicação na história?

**5.6** Qual o maior números de indicados em um único ano? Essa é uma pergunta franca.  

---

## Nível 6: Análise de Filmes

### Toy Story

**6.1** A série de filmes Toy Story ganhou Oscars em quais anos?

**6.2** Quantas indicações a franquia Toy Story recebeu no total?

**6.3** Em quais categorias os filmes Toy Story foram indicados?

### Crash

**6.4** Em qual edição do Oscar o filme "Crash" concorreu?

**6.5** Quantas indicações o filme "Crash" recebeu?

**6.6** "Crash" ganhou o Oscar de Melhor Filme?

### Central do Brasil

**6.7** O filme "Central do Brasil" aparece no banco de dados?

**6.8** Se sim, quantas indicações "Central do Brasil" recebeu?

---

## Nível 7: Operações de Atualização

**7.1** No campo "vencedor", altere todos os valores "true" (string) para true (booleano) e "false" (string) para false (booleano).

**7.2** Inclua no banco 3 filmes que nunca foram nomeados ao Oscar, mas que você acha que merecem. Use dados fictícios, mas realistas.

**7.3** Adicione uma nova categoria chamada "BEST INTERNATIONAL FEATURE FILM" com alguns vencedores recentes (2020-2024).

**7.4** Corrija possíveis erros de digitação nos nomes dos filmes (ex: espaços extras, caracteres especiais desnecessários).

**7.5** Remova todos os registros com valor NULL no campo nome_do_filme.

---

## Nível 8: Análise Temporal

**8.1** Quantas indicações aconteceram por década? Agrupe por década (1920s, 1930s, etc.) e mostre o total.

**8.2** Em qual década houve o maior número de indicações?

**8.3** Como o número de categorias evoluiu ao longo dos anos? Mostre quantas categorias únicas existiam a cada década.

**8.4** Qual foi o ano com o maior número de indicações registradas?

**8.5** Calcule a taxa de crescimento de indicações comparando a primeira década com a última.

---

## Nível 9: Questões Históricas e Sociais

### Representatividade

**9.1** Sidney Poitier foi o primeiro ator negro a ser indicado ao Oscar. Em que ano ele foi indicado? Por qual filme?

**9.2** Sidney Poitier ganhou o Oscar nessa indicação?

**9.3** Quantos atores/atrizes negros foram indicados na categoria ACTOR ou ACTRESS antes de 1970?

**9.4** Liste todos os filmes dirigidos por mulheres que ganharam algum Oscar.

### Coincidências

**9.5** Denzel Washington e Jamie Foxx já concorreram ao Oscar no mesmo ano?

**9.6** Se sim, em qual ano e quem ganhou?

**9.7** Encontre casos onde o mesmo filme ganhou Oscar em múltiplas categorias na mesma cerimônia. Mostre o nome do filme e quantas categorias ele venceu.

---

## Nível 10: Análise Avançada

**10.1** Quais filmes ganharam o Oscar de Melhor Filme ("OUTSTANDING PICTURE" ou "BEST PICTURE") e Melhor Diretor na mesma cerimônia?

**10.2** Qual filme recebeu o maior número de indicações em uma única cerimônia?

**10.3** Qual filme teve a maior taxa de conversão (porcentagem de indicações que viraram vitórias)?

**10.4** Encontre atores que foram indicados em anos consecutivos. Liste o nome e os anos.

**10.5** Qual a média de indicações por cerimônia ao longo da história?

**10.6** Identifique "surpresas" - indicados em categorias principais (ACTOR, ACTRESS, BEST PICTURE) cujo filme só teve uma indicação.

---

## Nível 11: Desafios Complexos

**11.1** Crie um ranking dos 10 filmes mais premiados da história (que ganharam mais Oscars).

**11.2** Crie um ranking dos 10 artistas (atores/diretores) mais indicados da história, independente da categoria.

**11.3** Encontre "azarões" - artistas com mais de 5 indicações e 0 vitórias.

**11.4** Qual categoria tem a maior concentração de vitórias (menos vencedores diferentes ao longo do tempo)?

**11.5** Calcule a "competitividade" de cada categoria (média de indicados por cerimônia).

**11.6** Encontre filmes que foram indicados em uma categoria em um ano e ganharam em outra categoria em outro ano.

---

## Nível 12: Casos Práticos

### Cenário 1: Curadoria de Mostra de Cinema

Você está organizando uma mostra de cinema e precisa selecionar filmes.

**12.1** Liste os 20 filmes mais premiados do Oscar para sua mostra.

**12.2** Selecione 5 filmes de cada década (1930s até 2020s) que ganharam pelo menos um Oscar.

**12.3** Crie uma lista de "clássicos esquecidos" - filmes que ganharam Oscars, mas são de mais de 50 anos atrás.

### Cenário 2: Análise para Documentário

Você está produzindo um documentário sobre a história do Oscar.

**12.4** Identifique os 5 momentos mais importantes (cerimônias com mais premiações históricas).

**12.5** Liste todos os "primeiros" históricos (primeira mulher a ganhar melhor direção, primeiro ator negro, etc.) - use sua criatividade para encontrar esses marcos.

**12.6** Encontre casos de "injustiça" - filmes/atores muito indicados, mas que nunca ganharam.

### Cenário 3: Estatísticas para Apostas

Você trabalha para um site de apostas e precisa de estatísticas.

**12.7** Qual a probabilidade histórica de um filme indicado em 10 categorias ganhar Melhor Filme?

**12.8** Atores que ganharam Melhor Ator tendem a ter quantas indicações antes da primeira vitória?

**12.9** Qual categoria tem os vencedores mais "previsíveis" (mesmo artista/filme ganha múltiplas vezes)?

---

## Nível 13: Queries Criativas

**13.1** Encontre todos os filmes cujo nome começa com "The" e ganharam pelo menos um Oscar.

**13.2** Liste todos os indicados cujo nome contém um sobrenome composto (ex: "Mary-Louise Parker").

**13.3** Encontre todas as cerimônias onde houve empate (múltiplos vencedores na mesma categoria no mesmo ano).

**13.4** Crie uma query que simule uma "loteria" - selecione 5 filmes aleatórios que ganharam Melhor Filme.

**13.5** Encontre padrões nos nomes dos filmes vencedores (ex: quantos têm uma palavra só, duas palavras, etc.).

---

## Desafio Final: Dashboard Completo

**14.1** Crie UMA ÚNICA query de agregação que retorne um dashboard executivo com:
   - Total de indicações
   - Total de cerimônias
   - Total de vencedores
   - Categoria com mais indicações
   - Filme mais premiado
   - Ator/atriz mais indicado(a)
   - Década com mais premiações
   - Número de categorias únicas

Bons estudos! 🏆
