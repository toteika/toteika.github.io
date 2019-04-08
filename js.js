<script type="text/javascript">
            function chg1 (id)
            {
                var el = document.getElementById(id);
                var all = new Array();
                var num = 0;
                all[0] = "1.jpg";
                all[1] = "2.jpg";
                
                for (var i=0; i<2; i++)
                {
                    if (el.src == all[i])
                    {
                        num == i;
                        break;
                    }
                }
                num++;
                el.src=all[num];
            }   
        </script>
