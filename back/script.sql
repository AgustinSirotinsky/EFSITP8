USE [master]
GO
/****** Object:  Database [tp8efsi]    Script Date: 28/8/2023 10:40:42 ******/
CREATE DATABASE [tp8efsi]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'tp8efsi', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\tp8efsi.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'tp8efsi_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\tp8efsi_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
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
EXEC sys.sp_db_vardecimal_storage_format N'tp8efsi', N'ON'
GO
ALTER DATABASE [tp8efsi] SET QUERY_STORE = OFF
GO
USE [tp8efsi]
GO
/****** Object:  User [alumno]    Script Date: 28/8/2023 10:40:42 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Preguntas]    Script Date: 28/8/2023 10:40:42 ******/
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Respuestas]    Script Date: 28/8/2023 10:40:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Respuestas](
	[IdRespuesta] [int] IDENTITY(1,1) NOT NULL,
	[Respuesta] [varchar](50) NOT NULL,
	[Imagen] [varchar](max) NULL,
	[IdPregunta] [int] NOT NULL,
	[IsTrue] [bit] NOT NULL,
 CONSTRAINT [PK_Respuestas] PRIMARY KEY CLUSTERED 
(
	[IdRespuesta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Preguntas] ON 

INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (1, N'¿Que tipo de automovil es mejor para el medio ambiente?', N'Los automóviles particulares generan el 18% de las emisiones de CO2, principal gas causante del efecto invernadero. Por lo tanto usar un colectivo (que lleva mas personas usando menos combustible) es mejor para el medio ambiente.')
INSERT [dbo].[Preguntas] ([IdPregunta], [Pregunta], [Justificacion]) VALUES (2, N'¿Cuál es una mejor opción para reducir el consumo de agua en el hogar?', N'Ducharse generalmente consume menos agua que bañarse en una bañera. Un baño de inmersión puede requerir hasta tres veces más agua que una ducha rápida.')
SET IDENTITY_INSERT [dbo].[Preguntas] OFF
GO
SET IDENTITY_INSERT [dbo].[Respuestas] ON 

INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (1, N'Auto', N'https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-850x567.jpg', 1, 0)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (2, N'Colectivo', N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FColectivos_de_Buenos_Aires&psig=AOvVaw0qUITloj-BL03r65aq_WVt&ust=1693316378653000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjf2Zu9_4ADFQAAAAAdAAAAABAE', 1, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (3, N'Ducharse', N'https://tiendasbuenosaires.com.ar/images/thumbs/0000499_box-cabina-de-ducha-curvo-transparente-vidrio-templado_625.jpeg', 2, 1)
INSERT [dbo].[Respuestas] ([IdRespuesta], [Respuesta], [Imagen], [IdPregunta], [IsTrue]) VALUES (4, N'Bañarse', N'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.easy.com.ar%2Fba%25C3%25B1era-anatomica-abs-con-acrilico-1400c%2Fp&psig=AOvVaw1TfI3d4lCgr0KFjmjndHXx&ust=1693316410688000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPC--Kq9_4ADFQAAAAAdAAAAABAE', 2, 0)
SET IDENTITY_INSERT [dbo].[Respuestas] OFF
GO
USE [master]
GO
ALTER DATABASE [tp8efsi] SET  READ_WRITE 
GO
