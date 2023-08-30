USE [master]
GO
/****** Object:  Database [tp8efsi]    Script Date: 30/8/2023 14:42:45 ******/
CREATE DATABASE [tp8efsi]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'tp8efsi', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\tp8efsi.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'tp8efsi_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\tp8efsi_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [tp8efsi] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [tp8efsi].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [tp8efsi] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [tp8efsi] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [tp8efsi] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [tp8efsi] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [tp8efsi] SET ARITHABORT OFF 
GO
ALTER DATABASE [tp8efsi] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [tp8efsi] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [tp8efsi] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [tp8efsi] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [tp8efsi] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [tp8efsi] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [tp8efsi] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [tp8efsi] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [tp8efsi] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [tp8efsi] SET  DISABLE_BROKER 
GO
ALTER DATABASE [tp8efsi] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [tp8efsi] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [tp8efsi] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [tp8efsi] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [tp8efsi] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [tp8efsi] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [tp8efsi] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [tp8efsi] SET RECOVERY FULL 
GO
ALTER DATABASE [tp8efsi] SET  MULTI_USER 
GO
ALTER DATABASE [tp8efsi] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [tp8efsi] SET DB_CHAINING OFF 
GO
ALTER DATABASE [tp8efsi] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [tp8efsi] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [tp8efsi] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [tp8efsi] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [tp8efsi] SET QUERY_STORE = OFF
GO
USE [tp8efsi]
GO
/****** Object:  User [alumno]    Script Date: 30/8/2023 14:42:45 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 30/8/2023 14:42:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Preguntas](
	[IdPregunta] [int] IDENTITY(1,1) NOT NULL,
	[Pregunta] [varchar](max) NOT NULL,
	[Justificacion] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Preguntas] PRIMARY KEY CLUSTERED 
(
	[IdPregunta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 30/8/2023 14:42:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[IdRespuesta] [int] IDENTITY(1,1) NOT NULL,
	[Respuesta] [text] NOT NULL,
	[Imagen] [varchar](max) NULL,
	[IdPregunta] [int] NOT NULL,
	[IsTrue] [bit] NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[IdRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (1, N'¿Qué método de transporte es más eficiente en términos de emisiones de carbono por persona?', N'Los trenes pueden transportar a muchas personas a la vez, lo que reduce significativamente las emisiones de carbono por persona en comparación con los automóviles individuales.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (2, N' ¿Cuál de las siguientes acciones contribuye de manera más significativa a la reducción de la huella de carbono personal?', N'La producción de carne tiene un alto impacto ambiental debido a la deforestación y las emisiones de gases de efecto invernadero. Cambiar hacia una dieta basada en plantas tiene un efecto más significativo en la reducción de la huella de carbono.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (3, N'¿Cuál es una mejor opción para reducir el consumo de agua en el hogar?', N'Ducharse generalmente consume menos agua que bañarse en una bañera. Un baño de inmersión puede requerir hasta tres veces más agua que una ducha rápida.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (5, N'¿Qué tipo de bolsas es más amigable con el medio ambiente?', N'Las bolsas de plástico desechables contribuyen a la contaminación y la acumulación de residuos. Las bolsas reutilizables, en cambio, reducen la necesidad de plásticos de un solo uso.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (6, N'¿Cuál de las siguientes fuentes de energía es más limpia y sostenible?', N'El carbón es una fuente de energía altamente contaminante, mientras que la energía solar es renovable, no produce emisiones de gases de efecto invernadero y tiene un menor impacto ambiental.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (7, N'¿Cuál es una mejor manera de reducir el consumo de papel?', N'Imprimir documentos contribuye a la deforestación y al consumo de recursos. Leer en línea reduce la demanda de papel y promueve la conservación de los bosques.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (8, N'¿Cuál es una opción más ecológica para eliminar residuos de cocina?', N'El compostaje convierte los residuos de cocina en abono natural, reduciendo la cantidad de residuos enviados a vertederos y disminuyendo la emisión de gases de efecto invernadero.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (9, N'¿Cuál de las siguientes prácticas ayuda a conservar el agua en el jardín?', N'El riego por goteo proporciona agua directamente a las raíces de las plantas, reduciendo el desperdicio de agua en comparación con el riego diario.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (10, N'¿Cuál de las siguientes actividades tiene un impacto negativo en los océanos?', N'Arrojar plásticos al mar causa contaminación marina, pone en peligro la vida marina y contribuye a la formación de islas de basura.')
SET IDENTITY_INSERT [dbo].[Preguntas] OFF
GO
SET IDENTITY_INSERT [dbo].[Respuestas] ON 

INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (1, N'Automóvil con una persona', NULL, 1, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (2, N'Tren ', NULL, 1, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (3, N'Reducir el consumo de carne y productos de origen animal.', NULL, 2, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (4, N'Usar bolsas de papel en lugar de bolsas de plástico.', NULL, 2, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (5, N'Ducharse ', NULL, 3, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (6, N'Bañarse ', NULL, 3, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (7, N'Bolsas de plástico desechables', NULL, 5, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (8, N'Bolsas reutilizables', NULL, 5, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (9, N'Carbón', NULL, 6, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (10, N'Energía solar', NULL, 6, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (11, N'Imprimir documentos', NULL, 7, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (12, N'Leer documentos en línea', NULL, 7, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (13, N'Arrojarlos al inodoro', NULL, 8, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (14, N'Compostaje ', NULL, 8, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (15, N'Riego por goteo', NULL, 9, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (16, N'Riego diario', NULL, 9, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (17, N'Arrojar plásticos al mar', NULL, 10, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (18, N'Utilizar productos de limpieza biodegradables', NULL, 10, 0)
SET IDENTITY_INSERT [dbo].[Respuestas] OFF
GO
USE [master]
GO
ALTER DATABASE [tp8efsi] SET  READ_WRITE 
GO
