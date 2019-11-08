vDataJSON["wikicode"]= `


== Definition ==
Eine Verteilungsfunktion kann über
* ein Wahrscheinlichkeitsmaß oder
* eine Zufallsvariable definieren

=== Definition mittels Wahrscheinlichkeitsmaß ===
Gegeben sei ein [[w:de:Wahrscheinlichkeitsmaß|Wahrscheinlichkeitsmaß]] <math> P </math> auf dem [[w:de:Ereignissystem|Ereignisraum]] der [[w:de:Reelle Zahl|reellen Zahlen]], d.&nbsp;h., jede reelle Zahl kann als mögliches [[w:de:Ergebnis (Stochastik)|Ergebnis]] aufgefasst werden. Dann heißt die Funktion
:<math> F_P\colon \mathbb{R} \to [0,1] </math>

definiert durch
:<math> F_P(x)=P((- \infty, x]) </math>

die Verteilungsfunktion von <math> P </math>. Mit anderen Worten: Die Funktion gibt an der Stelle <math> x </math> an, mit welcher Wahrscheinlichkeit ein Ergebnis aus der Menge <math> (- \infty, x] </math> (alle reellen Zahlen kleiner oder gleich <math> x </math>) eintritt.

=== Definition mittels Zufallsvariable ===
Ist <math> X </math> eine [[w:de:Zufallsvariable|reelle Zufallsvariable]], so nennt man die Funktion
:<math> F_X(x)=P(X \leq x) </math>

die Verteilungsfunktion von <math> X </math>. Dabei bezeichnet <math> P(X \leq x) </math> die Wahrscheinlichkeit, dass <math> X </math> einen Wert kleiner oder gleich <math> x </math> annimmt.

Somit ist die Verteilungsfunktion einer Zufallsvariable genau die Verteilungsfunktion ihrer [[w:de:Verteilung einer Zufallsvariablen|Verteilung]].

== Beispiele ==
=== Wahrscheinlichkeitsmaße mit Dichten ===
Besitzt das [[w:de:Wahrscheinlichkeitsmaß|Wahrscheinlichkeitsmaß]] <math> P </math> eine [[w:de:Wahrscheinlichkeitsdichte|Wahrscheinlichkeitsdichte]] <math> f_P </math>, so gilt
:<math> P((a,b])=\int_a^b f_P(x) \, \mathrm dx </math>.

Somit hat in diesem Fall die Verteilungsfunktion die Darstellung
:<math> F_P(x)=\int_{- \infty}^x f_P(t) \, \mathrm d t </math>

Diese Integraldarstellung im Sinne der Analysis ist im Allgemeinen aber nicht gegeben.

=== Dichte der Exponentialverteilung ===
Beispielsweise hat die [[w:de:Exponentialverteilung|Exponentialverteilung]] die Dichte
:<math>f_{\lambda}(x)= \begin{cases}\displaystyle \lambda{\rm e}^{-\lambda x} & x\geq 0 \\ 0                    & x < 0 \end{cases}  </math>.

Ist also die Zufallsvariable <math> X </math> exponentialverteilt, also <math> X \sim \operatorname{Exp}(\lambda) </math>, so ist
:<math> F_X(x)= \int_{- \infty}^x f_\lambda(t)\, \mathrm dt =\begin{cases}  1-\mathrm{e}^{-\lambda x}& x\geq 0, \\  0                        & x < 0. \end{cases} </math>.

=== Allgemeine Dichtefunktion ===
Nicht alle Wahrscheinlichkeitsmaße auf den reellen Zahlen besitzen eine Dichtefunktion bzgl. des [[w:de:Lebesgue-Maß|Lebesgue-Maßes]]. Beispielsweise haben diskrete Verteilungen, aufgefasst als Verteilungen in <math> \mathbb{R} </math>) keine integrable Dichtefunktion. Dafür muss man den Begriff der Dichte verallgemeinern und zu einer Dichte bzgl. eines dominierenden Maßes wählen. Für diskrete Verteilung kann man dann wieder eine Dichte bzgl. des Zählmaßes angeben.

=== Verteilungsfunktionen und Stammfunktionen ===
Für integrable Dichtefunktion muss nicht notwendigerweise eine [[w:de:Stammfunktion|Stammfunktion]] mit geschlossener Darstellung existieren. Eine Stammfunktion kann beispielsweise bei der [[w:de:Normalverteilung|Normalverteilung]] nicht angegeben werden.

=== Diskrete Wahrscheinlichkeitsmaße ===
Betrachtet man zu einem Parameter <math> p \in (0,1) </math> eine [[w:de:Bernoulli-Verteilung|Bernoulli-verteilte]] Zufallsvariable <math> X </math>, so ist
:<math> P(X=0) = 1-p \text{ und } P(X=1)=p </math>
und für die Verteilungsfunktion folgt dann
:<math> F(x) = \begin{cases} 0 & \text{ falls } x <0 \\ 1-p & \text{ falls } 0 \leq x < 1 \\  1 & \text{ falls } x \geq 1  \end{cases} </math>

=== Wahrscheinlichkeit durch Elementarreignissen ausdrücken ===
Ist allgemeiner <math>X:\Omega \to \mathbb{R}</math> eine Zufallsvariable auf <math>(\Omega,\mathcal{S},P)</math> mit Werten in den nichtnegativen ganzen Zahlen <math>\mathbb{N}_0</math>, dann gilt

:<math>F_X(x) = \sum_{k=0}^{\lfloor x \rfloor} P(X=k) = \sum_{k=0}^{\lfloor x \rfloor} P\left(\{\omega \in \Omega | X(\omega)=k\}\right)</math>.

Dabei bezeichnet <math>\lfloor \cdot \rfloor</math> die [[w:de:Abrundungsfunktion|Abrundungsfunktion]], das heißt <math>\lfloor x \rfloor</math> ist größte ganze Zahl, die kleiner oder gleich <math>x</math> ist.

== Eigenschaften und Zusammenhang zur Verteilung ==
[[Datei:Discrete probability distribution illustration.svg|mini|Verteilungsfunktionen einer diskreten, einer stetigen und einer gemischten Zufallsvariable.]]

=== Eigenschaften der Verteilungsfunktion ===
Jede Verteilungsfunktion <math>F\colon\mathbb{R}\rightarrow [0,1]</math> hat folgende Eigenschaften:
# <math>F</math> ist [[w:de:Monoton steigende Funktion|monoton steigend]].
# <math>F</math> ist [[w:de:Stetigkeit#Linksseitige/rechtsseitige Stetigkeit|rechtsseitig stetig]].
# <math>\lim_{x \to -\infty} F(x) = 0</math> und <math>\lim_{x \to \infty} F(x) =  1</math>.

=== Drei Eigenschaften liefern Verteilungsfunktion ===
Darüber hinaus ist jede Funktion <math>F\colon\mathbb{R}\rightarrow [0,1]</math>, die die Eigenschaften 1, 2 und 3 erfüllt, eine Verteilungsfunktion. Folglich ist eine Charakterisierung der Verteilungsfunktion mit Hilfe der drei Eigenschaften möglich.

=== Korrespondenzsatz ===
Es gibt zu jeder Verteilungsfunktion <math>F\colon\mathbb{R}\rightarrow [0,1]</math> genau solch ein Wahrscheinlichkeitsmaß <math>P_F\colon\mathcal{B}(\mathbb{R})\to[0,1]</math>, dass für alle <math>x\in\mathbb{R}</math> gilt:
:<math>P_F\left(]-\infty,x]\right)=F(x)</math>
Umgekehrt gibt es zu jedem Wahrscheinlichkeitsmaß <math>P\colon\mathcal{B}(\mathbb{R})\to[0,1]</math> eine Verteilungsfunktion <math>F_P\colon\mathbb{R}\rightarrow [0,1]</math> derart, dass für alle <math>x\in\mathbb{R}</math> gilt:
:<math>P\left(]-\infty,x]\right)=F_P(x)</math>
Daraus folgt die Korrespondenz von <math>P_{(F_P)}=P</math> und <math>F_{(P_F)}=F</math>. Dieser Sachverhalt wird in der Literatur auch ''[[w:de:Korrespondenzsatz (Stochastik)|Korrespondenzsatz]]'' genannt.<ref>N. Schmitz. ''Vorlesungen über Wahrscheinlichkeitstheorie.'' Teubner, 1996.</ref>

=== Sprungstellen der Verteilungsfunktion ===
Jede Verteilungsfunktion besitzt höchstens abzählbar viele Sprungstellen.

Da jede Verteilungsfunktion rechtsstetig ist, existiert auch der rechtsseitige Grenzwert und es gilt für alle <math>x\in\mathbb{R}</math>:
:<math>P_F\left(\{x\}\right)=F(x)-\lim_{\varepsilon\to0+}F(x-\varepsilon)</math>
Deswegen ist <math>F</math> genau dann stetig, wenn <math>P(\{x\})=0</math> für alle <math>x\in\mathbb{R}</math> gilt.

== Rechnen mit Verteilungsfunktionen ==
Ist eine Verteilungsfunktion <math> F </math> gegeben, so kann man wie folgt die Wahrscheinlichkeiten bestimmen:
:<math> P(X \leq a)= F(a) </math> sowie <math> P(X > a) = 1- F(a) </math> bzw.
:<math>  P((- \infty; a ])= F(a) </math> sowie <math> P((a ; + \infty )) = 1- F(a) </math>.

=== Berechnung der Wahrscheinlickeit von Intervallen ===
Insgesamt kann man mit Verteilungsfunktion auch die Wahrscheinlichkeit von halboffenen Intervallen berechnen:
:<math> P( a < X \leq b ) = F(b)-F(a) </math> und <math> P((a;b])= F(b)-F(a) </math>

für <math> a \leq b </math>.

=== Ungleichungen für diskrete Zufallsgröße ===
Im Allgemeinen kann hier die Art der Ungleichheitszeichen (<math> < </math> oder <math> \leq </math>) beziehungsweise die Art der Intervallgrenzen (offen, abgeschlossen, links/rechts halboffen) ''nicht'' vernachlässigt werden. Dies führt besonders bei [[w:de:Diskrete Wahrscheinlichkeitsverteilung|diskreten Wahrscheinlichkeitsverteilungen]] zu Fehlern, da sich dort auch auf einzelnen Punkten eine Wahrscheinlichkeit befinden kann, die dann versehentlich dazugezählt oder vergessen wird.

=== Ungleichungen für stetige Zufallsgröße ===
Bei [[w:de:Stetige Wahrscheinlichkeitsverteilung|stetigen Wahrscheinlichkeitsverteilungen]], also insbesondere auch bei solchen, die über eine [[w:de:Wahrscheinlichkeitsdichtefunktion|Wahrscheinlichkeitsdichtefunktion]] definiert werden ([[w:de:Absolutstetige Wahrscheinlichkeitsverteilung|Absolutstetige Wahrscheinlichkeitsverteilungen]]), führt eine Abänderung der Ungleichheitszeichen oder Intervallgrenzen nicht zu Fehlern, d.h. <math> P( a \leq X\leq b ) = P( a < X < b ) </math>
&nbsp;

=== Beispiel ===
Beim Würfeln errechnet sich die Wahrscheinlichkeit, eine Zahl zwischen 2 (exklusive) und einschließlich 5 zu würfeln, zu
:<math>P(2 < X \leq 5) = F(5) - F(2) = {5 \over 6} - {2 \over 6} = {3 \over 6} = {1 \over 2}</math>.

== Konvergenz ==
=== Definition ===
Eine Folge von Verteilungsfunktionen <math> (F_n)_{n \in \N} </math> heißt schwach konvergent gegen die Verteilungsfunktion <math> F </math>, wenn
:<math> \lim_{n \to \infty} F_n(x)=F(x) </math> gilt für alle <math> x \in \mathbb{R} </math>, an denen <math> F </math> stetig ist.<ref>Schmidt: ''Maß- und Wahrscheinlichkeit.'' 2011, S. 396.</ref>

Für Verteilungsfunktionen von Zufallsvariablen finden sich auch die Bezeichnungen ''konvergent in Verteilung'' oder ''stochastisch konvergent''.<ref>Kusolitsch: ''Maß- und Wahrscheinlichkeitstheorie.'' 2014, S. 287.</ref>

=== Eigenschaften ===
Über die schwache Konvergenz der Verteilungsfunktionen lässt sich mit dem [[w:de:Satz von Helly-Bray|Satz von Helly-Bray]] eine Brücke zur [[w:de:Schwache Konvergenz (Maßtheorie)|schwachen Konvergenz von Maßen]] schlagen. Denn eine Folge von Wahrscheinlichkeitsmaßen ist genau dann schwach konvergent, wenn die Folge ihrer Verteilungsfunktionen schwach konvergiert. Analog ist eine Folge von Zufallsvariablen genau denn [[w:de:Konvergenz in Verteilung|Konvergent in Verteilung]], wenn die Folge ihrer Verteilungsfunktionen schwach konvergiert.

Für [[w:de:Verteilungsfunktion (Maßtheorie)|Verteilungsfunktionen im Sinne der Maßtheorie]] ist die oben angegebene Definition nicht korrekt, sondern entspricht der [[w:de:Vage Konvergenz von Verteilungsfunktionen|vagen Konvergenz von Verteilungsfunktionen (im Sinne der Maßtheorie)]]. Diese fällt aber für Wahrscheinlichkeitsmaßen mit der [[w:de:Schwache Konvergenz von Verteilungsfunktionen|schwachen Konvergenz von Verteilungsfunktionen]] zusammen. Die schwache Konvergenz von Verteilungsfunktionen wird von dem [[w:de:Lévy-Abstand|Lévy-Abstand]] metrisiert.

=== Klassifikation von Verteilungsfunktionen ===
Wahrscheinlichkeitsverteilungen, deren Verteilungsfunktion [[w:de:Stetigkeit|stetig]] ist, werden [[w:de:stetige Wahrscheinlichkeitsverteilung|stetige Wahrscheinlichkeitsverteilung]]en genannt. Sie lassen sich noch weiter unterteilen in
* [[w:de:Absolutstetige Wahrscheinlichkeitsverteilung|Absolutstetige Wahrscheinlichkeitsverteilung]]en, für die eine [[w:de:Wahrscheinlichkeitsdichtefunktion|Wahrscheinlichkeitsdichtefunktion]] existiert. Typische  Beispiele hierfür wäre die [[w:de:Normalverteilung|Normalverteilung]] oder die [[w:de:Exponentialverteilung|Exponentialverteilung]].
* [[w:de:Stetigsinguläre Wahrscheinlichkeitsverteilung|Stetigsinguläre Wahrscheinlichkeitsverteilung]]en, die keine Wahrscheinlichkeitsdichtefunktion besitzen. Beispiel hierfür wäre die [[w:de:Cantor-Verteilung|Cantor-Verteilung]].

=== Ableitung der Verteilungsfunktion ===
Für absolutstetige Wahrscheinlichkeitsverteilungen entspricht die Ableitung der Verteilungsfunktion der Wahrscheinlichkeitsdichtefunktion. Zwar sind auch absolutstetige Wahrscheinlichkeitsverteilungen fast überall differenzierbar, ihre Ableitung ist aber fast überall gleich null.

Verteilungsfunktionen von [[w:de:Diskrete Wahrscheinlichkeitsverteilung|diskreten Wahrscheinlichkeitsverteilungen]] zeichnen sich durch ihre Sprünge zwischen den Bereichen mit konstanten Funktionswerten aus. Bei ihnen handelt es sich um [[w:de:Sprungfunktion (Maßtheorie)|Treppenfunktionen]].

== Alternative Definition ==
=== Linksseitig stetige Verteilungsfunktionen ===
Im Einflussbereich der Tradition [[w:de:Andrei Nikolajewitsch Kolmogorow|Kolmogorows]], namentlich der mathematischen Literatur des ehem. „[[w:de:Ostblock|Ostblock]]s“, findet sich parallel zur heute vorherrschenden „Kleiner-gleich“-Konvention der Verteilungsfunktion bis in die jüngere Vergangenheit eine weitere, die statt des Kleiner-gleich-Zeichens das Echt-kleiner-Zeichen verwendet,<ref>Alexandr Alexejewitsch Borowkow: ''Rachunek prawdopodobieństwa.'' Państwowe Wydawnictwo Naukowe, Warszawa 1977, S. 36&nbsp;ff.</ref><ref>[[w:de:Marek Fisz|Marek Fisz]]: ''Wahrscheinlichkeitsrechnung und mathematische Statistik.'' VEB Deutscher Verlag der Wissenschaften, Elfte Auflage, Berlin 1989, Definition 2.2.1, S. 51.</ref> also
:<math>F(x) = P(X < x),\quad x\in\mathbb{R}</math>

Bei stetigen Wahrscheinlichkeitsverteilungen stimmen beide Definitionen überein, bei diskreten Verteilungen dagegen unterscheiden sie sich darin, dass die Verteilungsfunktion im Fall der „Echt-kleiner“-Konvention an den Sprungstellen nicht rechtsseitig, sondern linksseitig stetig ist.

=== Beispiel ===
Es ergibt sich beispielsweise für die [[w:de:Binomialverteilung|Binomialverteilung]] bei der heute üblichen „Kleiner-gleich“-Konvention eine Verteilungsfunktion der Form

:<math>F(x) = P(X \le x) = \sum_{k=0}^{\lfloor x \rfloor}{n \choose k}p^k (1-p)^{n-k}</math>,

bei der „Echt-kleiner“-Konvention dagegen die Schreibweise

:<math>F(x) = P(X < x) = \sum_{k=0}^{\lceil x-1 \rceil}{n \choose k}p^k (1-p)^{n-k} </math>.

Speziell für <math>m \in \N</math> gilt im zweiten Fall also<ref>W. Gellert, H. Küstner, M. Hellwich, H. Kästner (Hrsg.): ''Kleine Enzyklopädie Mathematik.'' VEB Verlag Enzyklopädie Leipzig 1970, OCLC 174754758, S. 659–660.</ref>

:<math>F(m) = \sum_{k=0}^{m-1}P(X = k) </math>.

== Verwandte Konzepte ==
=== Empirische Verteilungsfunktion ===
Die [[w:de:empirische Verteilungsfunktion|empirische Verteilungsfunktion]] einer Stichprobe <math> (x_1, \dots, x_n) </math> spielt eine wichtige Rolle in der Statistik. Formal entspricht sie der Verteilungsfunktion einer [[w:de:Diskrete Gleichverteilung|diskreten Gleichverteilung]] auf den Punkten <math> (x_1, \dots, x_n) </math>. Ihre Bedeutung hat sie daher, dass nach dem [[w:de:Satz von Gliwenko-Cantelli|Satz von Gliwenko-Cantelli]] die empirische Verteilungsfunktion einer unabhängigen Stichprobe von Zufallszahlen gegen die Verteilungsfunktion der Wahrscheinlichkeitsverteilung konvergiert, mittels der die Zufallszahlen erzeugt wurden.

=== Gemeinsame Verteilungsfunktion und Rand-Verteilungsfunktionen ===
Die [[w:de:Gemeinsame Verteilungsfunktion|Gemeinsame Verteilungsfunktion]] verallgemeinert das Konzept einer Verteilungsfunktion von der Verteilung einer Zufallsvariablen auf die [[w:de:Gemeinsame Verteilung von Zufallsvariablen|Gemeinsame Verteilung von Zufallsvariablen]]. Ebenso lässt sich das Konzept von der [[w:de:Randverteilung|Randverteilung]] zur [[w:de:Rand-Verteilungsfunktion|Rand-Verteilungsfunktion]] übertragen. Diese Verteilungsfunktionen haben gemeinsam, dass ihr Definitionsbereich der <math> \mathbb{R}^k </math> ist für <math> k \geq 1 </math>

=== Verallgemeinerte Inverse Verteilungsfunktion ===
Die [[w:de:Verallgemeinerte inverse Verteilungsfunktion|Verallgemeinerte inverse Verteilungsfunktion]] bildet unter Umständen eine Umkehrfunktion zur Verteilungsfunktion und ist wichtig zur Bestimmung von [[w:de:Quantil (Wahrscheinlichkeitstheorie)|Quantilen]].

=== Verteilungsfunktion im Sinne der Maßtheorie ===
Verteilungsfunktionen können nicht nur für Wahrscheinlichkeitsmaße definiert werden, sondern für beliebige endliche Maße auf den reellen Zahlen. In diesen [[w:de:Verteilungsfunktion (Maßtheorie)|Verteilungsfunktionen (im Sinne der Maßtheorie)]] spiegeln sich dann wichtige Eigenschaften der Maße wider. Sie bilden eine Verallgemeinerung der hier besprochenen Verteilungsfunktionen.

=== Überlebensfunktion ===
Die [[w:de:Überlebensfunktion|Überlebensfunktion]] gibt im Gegensatz zu einer Verteilungsfunktion an, wie groß die Wahrscheinlichkeit ist, einen gewissen Wert zu Überschreiten. Sie tritt beispielsweise bei der Modellierung von Lebensdauern auf und gibt dort an, wie groß die Wahrscheinlichkeit ist, einen gewissen Zeitpunkt zu „überleben“.

=== Multivariate und mehrdimensionale Verteilungsfunktion ===
Die [[w:de:Multivariate Verteilungsfunktion|Multivariate Verteilungsfunktion]] ist die Verteilungsfunktion, die multivariaten Wahrscheinlichkeitsverteilungen zugeordnet wird. Als [[w:de:mehrdimensionale Verteilungsfunktion|mehrdimensionale Verteilungsfunktion]] wird hingegen meist die das höherdimensionale Pendant der Verteilungsfunktion im Sinne der Maßtheorie bezeichnet.

== Allgemeine Informationen ==

Die '''Verteilungsfunktion''' ist eine spezielle [[w:de:reelle Funktion|reelle Funktion]] in der [[w:de:Stochastik|Stochastik]] und ein zentrales Konzept bei der Untersuchung von [[w:de:Wahrscheinlichkeitsverteilung|Wahrscheinlichkeitsverteilung]]en auf den [[w:de:Reelle Zahl|reellen Zahlen]].

=== Beziehung Wahrscheinlichkeitsverteilung und Verteilungsfunktion ===
Jeder Wahrscheinlichkeitsverteilung und jeder [[w:de:Zufallsvariable|reellwertigen Zufallsvariable]] kann eine Verteilungsfunktion zugeordnet werden. Anschaulich entspricht dabei der Wert der Verteilungsfunktion an der Stelle <math> x </math> der Wahrscheinlichkeit, dass die zugehörige Zufallsvariable <math> X </math> einen Wert kleiner oder gleich <math> x </math> annimmt. Ist beispielsweise die Verteilung der Schuhgrößen in Europa gegeben, so entspricht der Wert der entsprechenden Verteilungsfunktion bei 45 der Wahrscheinlichkeit, dass ein beliebiger Europäer die Schuhgröße 45 oder kleiner besitzt.

=== Korrespondenzsatz ===
Ihre Bedeutung erhält die Verteilungsfunktion durch den [[w:de:Korrespondenzsatz (Stochastik)|Korrespondenzsatz]], der besagt, dass jeder Verteilungsfunktion eine Wahrscheinlichkeitsverteilung auf den reellen Zahlen zugeordnet werden kann und umgekehrt. Die Zuordnung ist [[w:de:Bijektive Funktion|bijektiv]]. Dies ermöglicht es, anstelle der Untersuchung von Wahrscheinlichkeitsverteilungen als [[w:de:Mengenfunktion|Mengenfunktion]]en auf einem komplexen [[w:de:Mengensystem|Mengensystem]] mit Methoden der [[w:de:Maßtheorie|Maßtheorie]] die entsprechenden Verteilungsfunktionen zu untersuchen. Diese sind reelle Funktionen und somit über die Methoden der [[w:de:Reelle Analysis|reellen Analysis]] leichter zugänglich.

=== Univerariate und multivariate Verteilungsfunktion ===
Als alternative Bezeichnungen finden sich unter anderem '''kumulierte Verteilungsfunktion''', da sie die Wahrscheinlichkeiten kleiner als <math> x </math> zu sein anhäuft, siehe auch [[w:de:kumulierte Häufigkeit|kumulierte Häufigkeit]]. Des Weiteren wird sie zur besseren Abgrenzung von ihrem höherdimensionalen Pendant, der [[w:de:Multivariate Verteilungsfunktion|multivariaten Verteilungsfunktion]], auch als '''univariate Verteilungsfunktion''' bezeichnet.<ref>Schmidt: ''Maß- und Wahrscheinlichkeit.'' 2011, S. 246.</ref> In Abgrenzung zum allgemeineren [[w:de:Verteilungsfunktion (Maßtheorie)|Maßtheoretischen Konzept einer Verteilungsfunktion]] finden sich die Bezeichnungen als '''wahrscheinlichkeitstheoretische Verteilungsfunktion''' oder als '''Verteilungsfunktion im engeren Sinn'''.<ref>Kusolitsch: ''Maß- und Wahrscheinlichkeitstheorie.'' 2014, S. 62.</ref>

=== Empirische Verteilungsfunktion ===
Die Entsprechung der Verteilungsfunktion in der [[w:de:Deskriptive Statistik|deskriptiven Statistik]] ist die [[w:de:Empirische Verteilungsfunktion|''empirische'' Verteilungs- oder Summenhäufigkeitsfunktion]]

== Literatur ==
* {{Literatur
   |Autor=Klaus D. Schmidt
   |Titel=Maß und Wahrscheinlichkeit
   |Auflage=2., durchgesehene
   |Verlag=Springer-Verlag
   |Ort=Heidelberg / Dordrecht / London / New York
   |Datum=2011
   |ISBN=978-3-642-21025-9
   |DOI=10.1007/978-3-642-21026-6}}
* {{Literatur
   |Autor=[[w:de:Achim Klenke|Achim Klenke]]
   |Titel=Wahrscheinlichkeitstheorie
   |Auflage=3.
   |Verlag=Springer-Verlag
   |Ort=Berlin / Heidelberg
   |Datum=2013
   |ISBN=978-3-642-36017-6
   |DOI=10.1007/978-3-642-36018-3}}
* {{Literatur
   |Autor=Norbert Kusolitsch
   |Titel=Maß- und Wahrscheinlichkeitstheorie
   |TitelErg=Eine Einführung
   |Auflage=2., überarbeitete und erweiterte
   |Verlag=Springer-Verlag
   |Ort=Berlin / Heidelberg
   |Datum=2014
   |ISBN=978-3-642-45386-1
   |DOI=10.1007/978-3-642-45387-8}}

== Einzelnachweise ==
<references />

[[Kategorie:Stochastik]]

== Seiten-Information ==
=== Wikiversity2Wikipedia ===
Diese Seite wurde auf Basis der folgenden [https://de.wikipedia.org/wiki/Verteilungsfunktion Wikipedia-Quelle] erstellt:
* [https://de.wikipedia.org/wiki/Verteilungsfunktion Verteilungsfunktion] https://de.wikipedia.org/wiki/Verteilungsfunktion
* Datum: 5.11.2019
* [https://niebert.github.com/Wikipedia2Wikiversity Wikipedia2Wikiversity-Konverter]: https://niebert.github.com/Wikipedia2Wikiversity

=== Wiki2Reveal ===
Dieser '''[https://niebert.github.io/Wiki2Reveal/wiki2reveal.html?domain=wikiversity&title=Kurs:Stochastik/Verteilungsfunktion&author=Kurs:Stochastik&language=de&audioslide=yes Wiki2Reveal Foliensatz]''' wurde für den Lerneinheit '''[https://de.wikiversity.org/wiki/_Kurs:Stochastik Kurs:Stochastik]'''' erstellt der Link für die [[v:en:Wiki2Reveal|Wiki2Reveal-Folien]] wurde mit dem  [https://niebert.github.io/Wiki2Reveal/ Wiki2Reveal-Linkgenerator] erstellt.

* Die Inhalte der Seite basieren auf den folgenden Inhalten:
** [https://de.wikipedia.org/wiki/Kurs:Stochastik/Verteilungsfunktion https://de.wikiversity.org/wiki/Verteilungsfunktion]
* [https://de.wikiversity.org/wiki/Kurs:Stochastik/Verteilungsfunktion Die Seite] wurde als Dokumententyp [https://de.wikiversity.org/wiki/PanDocElectron-Presentation PanDocElectron-SLIDE] erstellt.
* Link zur Quelle in  Wikiversity:  https://de.wikiversity.org/wiki/Kurs:Stochastik/Verteilungsfunktion
* siehe auch weitere Informationen zu [[v:en:Wiki2Reveal|Wiki2Reveal]] und unter [https://niebert.github.io/Wiki2Reveal/index.html?domain=wikiversity&title=Kurs:Stochastik/Verteilungsfunktion&author=Kurs:Stochastik&language=de&audioslide=yes Wiki2Reveal-Linkgenerator].
<!-- * Nächster Inhalt des Kurses ist [[]] -->

[[Category:Wiki2Reveal]]

`;
