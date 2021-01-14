# Datatime não é um tipo de apropriado de dado com inteiro, float ....
# mas podemos importa um modulo denominado datatime para trabalhar com datas como objetos de data.
import datetime
x = datetime.datetime.now()
print(x)
# Exibe a data atual

# Retornando dados separados (ano e nome do dia da semana)
print(x.year)
print(x.strftime('%A'))

# Criação de objeto data
# Para ciar um objeto datetime use a datetime() construtor.
# Passando três paramentros para criar a data: ano, mes e dia
y = datetime.datetime(2020, 10, 30, 12,25,00)
print(y)
# Se quisermos adicionar horas, minutos e segundos... basta adicionar apois a data.

#strftime()
# responsavel por formatar objetos de data em strings legiveis

# %a	Weekday, short version              	                        Wed	
# %A	Weekday, full version	                                        Wednesday	
# %w	Weekday as a number 0-6, 0 is Sunday	                        3	
# %d	Day of month 01-31	                                            31	
# %b	Month name, short version	                                    Dec	
# %B	Month name, full version	                                    December	
# %m	Month as a number 01-12	                                        12	
# %y	Year, short version, without century	                        18	
# %Y	Year, full version	                                            2018	
# %H	Hour 00-23	                                                    17	
# %I	Hour 00-12	                                                    05	
# %p	AM/PM	                                                        PM	
# %M	Minute 00-59	                                                41	
# %S	Second 00-59	                                                08	
# %f	Microsecond 000000-999999	                                    548513	
# %z	UTC offset	                                                    +0100	
# %Z	Timezone	                                                    CST	
# %j	Day number of year 001-366	                                    365	
# %U	Week number of year, Sunday as the first day of week, 00-53	    52	
# %W	Week number of year, Monday as the first day of week, 00-53	    52	
# %c	Local version of date and time	                                Mon Dec 31 17:41:00 2018	
# %x	Local version of date	                                        12/31/18	
# %X	Local version of time	                                        17:41:00	
# %%	A % character	                                                   %