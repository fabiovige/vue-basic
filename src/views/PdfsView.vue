<template>


    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h2 class="card-title">SELECIONE O PDF</h2>
          </div>
          <div class="card-body">
            <button class="btn btn-success mt-3" @click="downloadPdf">Download PDF</button>
            <button class="btn btn-primary mt-3" @click="viewPdf">View PDF
              <span v-if="isLoading"> <i class="bi bi-check"></i></span>
              <span v-else><i class="bi bi-check"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h2 class="card-title">PDF</h2>
          </div>
          <div class="card-body">
            <div id="pdf"></div>
          </div>
        </div>
      </div>
    </div>


  </template>
  
  <script setup>
  import {onMounted, ref} from "vue";
  import myAxios from "axios";
  let isLoading = ref(false);
  let isShow = ref(false);
  let showSpinner = ref(false);

  async function abrirPDF2() {
    const {data} = await myAxios.get('http://api-classmaker.test/api/pdfs');
    console.log(data);
    const pdfBase64 = data.pdf;

    const divPdf = document.querySelector('#pdf');

    // const html2 = '<div style="width: auto; height: 650px; border: 1px solid #000; overflow: hidden; ">\n' +
    // '<div style="width: auto; height: 700px; border: 1px solid #ccc; overflow: hidden; position: relative; top:-56px;">\n' +
    // '<embed width="100%" height="100%" src="data:application/pdf;base64,' + pdfBase64 + '"></embed>\n' +
    // '</div>\n' +
    // '</div>';

    const html = 'teste'
    const el = document.createElement('div');
    el.innerHTML = html;

    divPdf.appendChild(el);

  }

  async function downloadPdf() {
    await myAxios.get('http://api-classmaker.test/api/pdf-download', {responseType: 'blob'})
        .then( data => {
          const url = window.URL.createObjectURL(new Blob([data.data]));
          const link = document.createElement('a');
          link.href = url;
          //link.textContent = 'DOWNLOAD AQUI';
          link.setAttribute('download', 'pdf.pdf');
          //document.body.appendChild(link);
          link.click();
          //const divElement = document.querySelector('#pdf');
          //divElement.appendChild(link);
        });
  }


  function startSpinner() {
    showSpinner.value = true;

    // Simulando uma ação assíncrona que leva 3 segundos
    setTimeout(() => {
      showSpinner.value = false;
    }, 4000);
  }

  async function viewPdf() {
        isLoading.value = true;

        const response = await myAxios.get('http://api-classmaker.test/api/pdf-view')
            .then( data => {
              const base64Data = data.data.pdf;
              const contentType = 'application/pdf';

              const byteCharacters = atob(base64Data);
              const byteArrays = [];

              for (let offset = 0; offset < byteCharacters.length; offset += 512) {
                const slice = byteCharacters.slice(offset, offset + 512);

                const byteNumbers = new Array(slice.length);
                for (let i = 0; i < slice.length; i++) {
                  byteNumbers[i] = slice.charCodeAt(i);
                }

                const byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
              }

              const blob = new Blob(byteArrays, { type: contentType });
              const pdfUrl = URL.createObjectURL(blob);

              const html = '<div style="width: auto; height: 650px; overflow: hidden; ">\n' +
                  '<div style="width: auto; height: 700px; overflow: hidden; position: relative; top:-55px;">\n' +
                  '<embed name="pdfView" width="100%" height="100%" src="' + pdfUrl + '#toolbar=0"></embed>\n' +
                  '</div>\n' +
                  '</div>';

              //const iframe = document.getElementById('pdf-iframe');
              //iframe.src = pdfUrl;

              const pdf = document.querySelector('#pdf')
              pdf.innerHTML = html;

            }).finally(()=>{
              isLoading.value = false;
            });


        return {

        }
  }



  </script>
  
  <style scoped>

  </style>